import React from 'react'
import { connect } from 'react-redux'
import { Radio, Switch, Button, message } from 'antd';
import { 
	toggleCollapsedNav, 
	onNavTypeChange,
	onNavStyleChange,
	onTopNavColorChange,
	onHeaderNavColorChange
} from 'redux/actions/Theme';
import { CopyOutlined } from '@ant-design/icons';
import CopyToClipboard from 'react-copy-to-clipboard';
import NavLanguage from './NavLanguage';
import { 
	SIDE_NAV_LIGHT,
	NAV_TYPE_SIDE,
	NAV_TYPE_TOP,
	SIDE_NAV_DARK
} from 'constants/ThemeConstant';

const colorOptions = [
	'#3e82f7',
	'#24a772',
	'#de4436',
	'#924aca',
	'#193550'
]

const white = '#ffffff'

const ListOption = ({name, selector, disabled, vertical}) => (
	<div className={`my-4 ${vertical? '' : 'd-flex align-items-center justify-content-between'}`}>
		<div className={`${disabled ? 'opacity-0-3' : ''} ${vertical? 'mb-3' : ''}`}>{name}</div>
		<div>{selector}</div>
	</div>
)

export const ThemeConfigurator = ({ 
	navType, 
	sideNavTheme, 
	navCollapsed,
	topNavColor,
	headerNavColor,
	locale,
	toggleCollapsedNav, 
	onNavTypeChange, 
	onNavStyleChange,
	onTopNavColorChange,
	onHeaderNavColorChange
}) => {
	const isNavTop = navType === NAV_TYPE_TOP? true : false
	const isCollapse = navCollapsed 
	const ontopNavColorClick = (value) => {
		if(value === white) {
			onHeaderNavColorChange('#193550')
			onTopNavColorChange(white)
		} else {
			onTopNavColorChange(value)
			onHeaderNavColorChange(white)
		}
	}
	const onHeaderNavColorClick = (value) => {
		if(value === white) {
			onTopNavColorChange(colorOptions[0])
		}
		onHeaderNavColorChange(value)
	}

	const onNavTypeClick = (value) => {
		if(value === NAV_TYPE_TOP) {
			onTopNavColorChange(colorOptions[0])
			onHeaderNavColorChange(white)
			toggleCollapsedNav(false)
		}
		if(value === NAV_TYPE_TOP) {
			onHeaderNavColorChange(white)
		}
		onNavTypeChange(value)
	}

	const genCopySettingJson = (configState) => JSON.stringify(configState, null, 2);
	return (
		<>
			<div className="mb-5">
				<h4 className="mb-3 font-weight-bold">Navigation</h4>
				{
					isNavTop ?
					<ListOption 
						name="Top Nav Color:"
						vertical
						selector={
							<Radio.Group 
								className="color-selector" 
								onChange={e => ontopNavColorClick(e.target.value)}
								value={topNavColor}
							>
								{colorOptions.map(color => (
									<Radio key={color} style={{backgroundColor: color}} value={color}></Radio>
								))}
								<Radio className="bg-white" key={white} style={{backgroundColor: white}} value={white}></Radio>
							</Radio.Group>
						}
					/>
					:
					<ListOption 
						name="Header Nav Color:"
						vertical
						selector={
							<Radio.Group 
								className="color-selector" 
								onChange={e => onHeaderNavColorClick(e.target.value)}
								value={headerNavColor}
							>
								{colorOptions.map(color => (
									<Radio key={color} style={{backgroundColor: color}} value={color}></Radio>
								))}
								<Radio className="bg-white" key={white} style={{backgroundColor: white}} value={white}></Radio>
							</Radio.Group>
						}
					/>
				}
				
				<ListOption 
					name="Navigation Type:"
					selector={
						<Radio.Group 
							size="small" 
							onChange={e => onNavTypeClick(e.target.value)} 
							value={navType}
						>
							<Radio.Button value={NAV_TYPE_SIDE}>Side</Radio.Button>
							<Radio.Button value={NAV_TYPE_TOP}>Top</Radio.Button>
						</Radio.Group>
					}
				/>
				<ListOption 
					name="Side Nav Color:"
					selector={
						<Radio.Group
							disabled={isNavTop}
							size="small" 
							onChange={e => onNavStyleChange(e.target.value)} 
							value={sideNavTheme}
						>
							<Radio.Button value={SIDE_NAV_LIGHT}>Light</Radio.Button>
							<Radio.Button value={SIDE_NAV_DARK}>Dark</Radio.Button>
						</Radio.Group>
					}
					disabled={isNavTop}
				/>
				<ListOption 
					name="Side Nav Collapse:"
					selector={
						<Switch 
							disabled={isNavTop} 
							checked={isCollapse} 
							onChange={() => toggleCollapsedNav(!navCollapsed)} 
						/>
					}
					disabled={isNavTop}
				/>
			</div>
			<div className="mb-5">
				<h4 className="mb-3 font-weight-bold">Locale</h4>
				<ListOption 
					name="Language:"
					selector={
						<NavLanguage configDisplay/>
					}
				/>
			</div>
			<div>
				<CopyToClipboard
					text={genCopySettingJson({ navType, sideNavTheme, navCollapsed, topNavColor, headerNavColor, locale})}
					onCopy={() => message.success('Copy Success, please paste it to src/configs/AppConfig.js THEME_CONFIG variable.') }
				>
					<Button icon={<CopyOutlined /> } block>
						<span>Copy Setting</span>
					</Button>
				</CopyToClipboard>
			</div>
		</>
	)
}

const mapStateToProps = ({ theme }) => {
  const { navType, sideNavTheme, navCollapsed, topNavColor, headerNavColor, locale } =  theme;
  return { navType, sideNavTheme, navCollapsed, topNavColor, headerNavColor, locale }
};

const mapDispatchToProps = {
	toggleCollapsedNav,
	onNavTypeChange,
	onNavStyleChange,
	onTopNavColorChange,
	onHeaderNavColorChange,
}

export default connect(mapStateToProps, mapDispatchToProps)(ThemeConfigurator)
