import { Button, Col, Form, Input, InputNumber, Row, Select } from "antd";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { v4 as uuidv4 } from "uuid";
import { CardComponent, CardHeaderTwoComponent } from "../../components/card";
import Gap from "../../components/gap/Gap";
import { addResources } from "../../service/service";

const AddResource = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { Option } = Select;
  const [form] = Form.useForm();
  const [loading, setLoading] = useState(false);
  const location = useLocation();
  const provinceData = location?.state.provinceData;
  const cityData = location?.state.cityData;
  const sizeData = location?.state.sizeData;

  const submit = async (value) => {
    setLoading(true);

    let id = uuidv4();
    let timestamp = Date.now();
    let tgl_parsed = new Date().toISOString();
    const values = [
      {
        uuid: id,
        komoditas: value?.komoditas?.toUpperCase(),
        area_provinsi: value?.province,
        area_kota: value?.city,
        stock: value?.stock,
        price: value?.price,
        timestamp: timestamp,
        tgl_parsed: tgl_parsed,
      },
    ];

    await dispatch(addResources(values));
    setLoading(false);
    Swal.fire({
      icon: "success",
      showConfirmButton: false,
      showCloseButton: true,
      text: `Successfully add data`,
    }).then(() => {
      navigate("/");
    });
  };
  return (
    <>
      <CardHeaderTwoComponent>
        <div className="cardTitle">Add Data</div>
        <div className="divider" />
      </CardHeaderTwoComponent>
      <Gap height={5} />
      <CardComponent>
        <Gap height={30} />
        <Row justify="center">
          <Col xs={24} sm={24} md={18} lg={18} xl={18}>
            <Form
              form={form}
              name="Edit"
              labelAlign="left"
              labelCol={{ span: 4 }}
              wrapperCol={{
                xs: {
                  span: 24,
                },
                sm: {
                  span: 20,
                },
              }}
              onFinish={submit}
              autoComplete="off"
              layout="horizontal"
              colon={false}
            >
              <Form.Item name="komoditas" label="Komoditas">
                <Input placeholder="Komoditas" className="input-style" />
              </Form.Item>

              <Form.Item name="stock" label="Stock">
                <Select placeholder="Select Stock" showSearch>
                  {sizeData?.map((size) => {
                    return <Option value={size.value}>{size.label}</Option>;
                  })}
                </Select>
              </Form.Item>

              <Form.Item name="price" label="Price">
                <InputNumber
                  style={{
                    width: "100%",
                    borderTopLeftRadius: 0,
                    borderBottomLeftRadius: 0,
                  }}
                  addonBefore="Rp"
                  placeholder="Input Price"
                  block
                  min={0}
                  formatter={(value) =>
                    `${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ",")
                  }
                  parser={(value) => value.replace(/\$\s?|(,*)/g, "")}
                />
              </Form.Item>

              <Form.Item name="province" label="Province">
                <Select placeholder="Select Province" showSearch>
                  {provinceData?.map((size) => {
                    return <Option value={size.value}>{size.label}</Option>;
                  })}
                </Select>
              </Form.Item>

              <Form.Item name="city" label="City">
                <Select placeholder="Select City" showSearch>
                  {cityData?.map((size) => {
                    return <Option value={size.value}>{size.label}</Option>;
                  })}
                </Select>
              </Form.Item>

              <Gap height={20} />

              <Row gutter={12}>
                <Col xs={12} sm={12} md={6} lg={6} xl={6}>
                  <Button
                    className="secondaryButton"
                    block
                    shape="round"
                    onClick={() => {
                      navigate(-1);
                    }}
                  >
                    Cancel
                  </Button>
                </Col>
                <Col xs={12} sm={12} md={6} lg={6} xl={6}>
                  <Button
                    className="primaryButton"
                    type="primary"
                    block
                    htmlType="submit"
                    loading={loading}
                  >
                    Save
                  </Button>
                </Col>
              </Row>
            </Form>
          </Col>
        </Row>
        <Gap height={30} />
      </CardComponent>
    </>
  );
};

export default AddResource;
