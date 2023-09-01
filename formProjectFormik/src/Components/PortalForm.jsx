import React from "react";
import { Form, Formik } from "formik";
import CustomInput from "./CustomInput";
import { advencedSchema } from "../Schemas";
import CustomSelect from "./CustomSelect";
import CustomCheckBox from "./CustomCheckBox";
import { Link } from "react-router-dom";
const onSubmit = async (values, actions) => {
  await new Promise((r) => setTimeout(r, 1000));
  actions.resetForm();
};
const PortalForm = () => {
  return (
    <>
      <Formik
        initialValues={{ username: "", university: "", isAccepted: false }}
        onSubmit={onSubmit}
        validationSchema={advencedSchema}
      >
        {({ isSubmitting }) => (
          <Form>
            <CustomInput
              label="Kullanıcı Adı"
              name="username"
              type="text"
              placeholder="Kullanıcı Adınızı Giriniz"
            />
            <CustomSelect
              label="Okulunuz"
              name="university"
              placeholder="Lütfen Üniversitenizi Seçiniz"
            >
              <option value="">Lütfen üniversitenizi seçiniz</option>
              <option value="bogazici">Boğaziçi Üniversitesi</option>
              <option value="gsu">Galatasaray Üniversitesi</option>
              <option value="odtü">ODTÜ</option>
              <option value="itü">İTÜ</option>
            </CustomSelect>
            <CustomCheckBox
              type="checkbox"
              name="isAccapted"
              span="Kullanım koşullarını kabul ediyorum"
            />
            <button type="submit" disabled={isSubmitting}>
              Kaydet
            </button>
            <Link to="/" className="formlink">
              Ana Forma Git
            </Link>
          </Form>
        )}
      </Formik>
    </>
  );
};

export default PortalForm;
