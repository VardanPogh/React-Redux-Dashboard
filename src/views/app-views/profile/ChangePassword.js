import React, { useState } from "react";
import { Button, Form, Input, Alert, Card, Row, Col } from "antd";
import { auth, emailAuthProvider } from "../../../auth/FirebaseAuth";
import { useHistory } from "react-router-dom";
import { motion } from "framer-motion";

export const ChangePassword = ({}) => {
  let history = useHistory();
  const [loading, setLoading] = useState(false);

  // Reauthenticates the current user
  const reauthenticate = (currentPassword) => {
    let user = auth.currentUser;
    let cred = emailAuthProvider.credential(user.email, currentPassword);
    return user.reauthenticateWithCredential(cred);
  };
  const _changePassword = (data) => {
    if (data.newpassword === data.confirmpassword) {
      setLoading(true);
      reauthenticate(data.password)
        .then(() => {
          let user = auth.currentUser;
          user
            .updatePassword(data.newpassword)
            .then(() => {
              setLoading(false);
              alert("Successfully password has changed");
              history.goBack();
            })
            .catch((error) => {
              setLoading(false);
              alert("Error", error.message);
            });
        })
        .catch((error) => {
          setLoading(false);
          alert("Current password not match");
        });
    } else {
      alert("New password not match with confirm password");
    }
  };

  return (
    <>
      <div className="h-100">
        <div className="container d-flex flex-column justify-content-center">
          <Row justify="center">
            <Col xs={20} sm={20} md={12} lg={12}>
              <Card>
                <div className="my-4">
                  <div>
                    <h2>Change Password</h2>
                  </div>
                  <motion.div initial={{ opacity: 0, marginBottom: 0 }}>
                    <Alert type="error" showIcon></Alert>
                  </motion.div>
                  <Form
                    layout="vertical"
                    name="edit-form"
                    onFinish={_changePassword}
                  >
                    <Form.Item
                      name="password"
                      label="Current Password"
                      rules={[
                        {
                          required: true,
                          message: "Please input your current password",
                        },
                      ]}
                    >
                      <Input.Password />
                    </Form.Item>
                    <Form.Item
                      name="newpassword"
                      label="New Password"
                      rules={[
                        {
                          required: true,
                          message: "Please input your new password",
                        },
                      ]}
                    >
                      <Input.Password />
                    </Form.Item>
                    <Form.Item
                      name="confirmpassword"
                      label="Confirm Password"
                      rules={[
                        {
                          required: true,
                          message: "Please input your confirm password",
                        },
                      ]}
                    >
                      <Input.Password />
                    </Form.Item>
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
                </div>
              </Card>
            </Col>
          </Row>
        </div>
      </div>
    </>
  );
};

export default ChangePassword;
