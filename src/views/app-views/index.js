import React, {lazy, Suspense} from "react";
import {Switch, Route, Redirect} from "react-router-dom";
import Loading from 'components/shared-components/Loading';
import {APP_PREFIX_PATH} from 'configs/AppConfig'

export const AppViews = () => {
    return (
        <Suspense fallback={<Loading cover="content"/>}>
            <Switch>
                <Route path={`${APP_PREFIX_PATH}`} component={lazy(() => import(`./home`))} exact/>
                <Route path={`${APP_PREFIX_PATH}platforms`} component={lazy(() => import(`./platforms`))} exact/>
                <Route path={`${APP_PREFIX_PATH}profile`} component={lazy(() => import(`./profile`))} exact/>
                <Route path={`${APP_PREFIX_PATH}profile/edit`} component={lazy(() => import(`./profile/EditProfile`))} exact/>
                <Route path={`${APP_PREFIX_PATH}profile/change-password`} component={lazy(() => import(`./profile/ChangePassword`))} exact/>
                {/*<Redirect from={`${APP_PREFIX_PATH}`} to={`${APP_PREFIX_PATH}/home`} />*/}
            </Switch>
        </Suspense>
    )
}

export default React.memo(AppViews);
