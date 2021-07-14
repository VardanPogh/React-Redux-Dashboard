import React, { useEffect } from "react";
import { connect } from "react-redux";
import { Button, Form, Input, Divider, Alert, Card, Row, Col } from "antd";
import { UserOutlined } from "@ant-design/icons";
import PropTypes from "prop-types";
import CustomIcon from "components/util-components/CustomIcon";
import { useHistory } from "react-router-dom";
import { motion } from "framer-motion";
import { saveProfile, showLoading } from "../../../redux/actions/User";

export const EditProfile = ({ loading, message }) => {
  let history = useHistory();
  console.log('--loading', loading);
  const onSave = (values) => {
    showLoading();
    saveProfile(values);
  };

  useEffect(() => {});

  return (
    <>
      <div className="h-100">
        <div className="container d-flex flex-column justify-content-center">
          <Row justify="center">
            <Col xs={20} sm={20} md={20} lg={20}>
              <Card>
                <div className="my-4">
                  <div>
                    <h2>Edit Profile</h2>
                  </div>
                  <Row justify="center">
                    <Col xs={24} sm={24} md={20} lg={20}>
                      <motion.div initial={{ opacity: 0, marginBottom: 0 }}>
                        <Alert type="error" showIcon></Alert>
                      </motion.div>
                      <Form
                        layout="vertical"
                        name="edit-form"
                        onFinish={onSave}
                      >
                        <Row gutter={16}>
                          <Col xs={24} sm={11} md={11}>
                            <Form.Item
                              name="name"
                              label="Name"
                              rules={[
                                {
                                  required: true,
                                  message: "Please input full name",
                                },
                              ]}
                            >
                              <Input className="text-primary" />
                            </Form.Item>
                          </Col>
                          <Col xs={24} sm={11} md={11}>
                            <Form.Item
                              name="phone"
                              label="Phone"
                              rules={[
                                {
                                  required: true,
                                  message: "Please input phone",
                                },
                              ]}
                            >
                              <Input className="text-primary" />
                            </Form.Item>
                          </Col>
                        </Row>
                        <Row gutter={16}>
                          <Col xs={24} sm={11} md={11}>
                            <Form.Item
                              name="country"
                              label="Country"
                              rules={[
                                {
                                  required: true,
                                  message: "Please input country",
                                },
                              ]}
                            >
                              <Input className="text-primary" />
                            </Form.Item>
                          </Col>
                          <Col xs={24} sm={11} md={11}>
                            <Form.Item
                              name="countryid"
                              label="CountryId"
                              rules={[
                                {
                                  required: true,
                                  message: "Please input country id",
                                },
                              ]}
                            >
                              <Input className="text-primary" />
                            </Form.Item>
                          </Col>
                          <Col xs={24} sm={22} md={22}>
                            <Form.Item
                              name="address"
                              label="Address"
                              rules={[
                                {
                                  required: true,
                                  message: "Please input full address",
                                },
                              ]}
                            >
                              <Input className="text-primary" />
                            </Form.Item>
                          </Col>
                        </Row>

                        <Form.Item>
                          <Button
                            type="primary"
                            htmlType="submit"
                            loading={loading}
                          >
                            Save
                          </Button>
                        </Form.Item>
                      </Form>
                    </Col>
                  </Row>
                </div>
              </Card>
            </Col>
          </Row>
        </div>
      </div>
    </>
  );
};

const mapStateToProps = ({ user }) => {
  const { loading, message, redirect } = user;
  return { loading, message, redirect };
};

const mapDispatchToProps = { saveProfile, showLoading };

export default connect(mapStateToProps, mapDispatchToProps)(EditProfile);
