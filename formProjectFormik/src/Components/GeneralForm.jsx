import React from "react";
import { useFormik } from "formik";
import { basicSchema } from "../Schemas";
import { Link } from "react-router-dom";
const onSubmit = async (values, actions) => {
  await new Promise((r) => setTimeout(r, 1000));
  actions.resetForm();
};
const GeneralForm = () => {
  const { values, errors, handleChange, handleSubmit, isSubmitting } =
    useFormik({
      initialValues: {
        email: "",
        age: "",
        password: "",
        confirmPassword: "",
      },
      validationSchema: basicSchema,
      onSubmit,
    });

  return (
    <form onSubmit={handleSubmit}>
      <div className="inputDiv">
        <label>Email</label>
        <input
          type="email"
          id="email"
          value={values.email}
          placeholder="Mail adresinizi giriniz"
          onChange={handleChange}
          className={errors.email ? "input-error" : ""}
        />
        {errors.email && <p className="error">{errors.email}</p>}
      </div>

      <div className="inputDiv">
        <label>Yaş</label>
        <input
          type="number"
          id="age"
          value={values.age}
          placeholder="Yaşınızı giriniz"
          onChange={handleChange}
          className={errors.age ? "input-error" : ""}
        />
        {errors.age && <p className="error">{errors.age}</p>}
      </div>
      <div className="inputDiv">
        <label>Şifreniz</label>
        <input
          type="password"
          id="password"
          value={values.password}
          placeholder="Şifrenizi giriniz"
          onChange={handleChange}
          className={errors.password ? "input-error" : ""}
        />
        {errors.password && <p className="error">{errors.password}</p>}
      </div>
      <div className="inputDiv">
        <label>Şifre Tekrar</label>
        <input
          type="password"
          id="confirmPassword"
          value={values.confirmPassword}
          placeholder="Şifre tekrarını giriniz"
          onChange={handleChange}
          className={errors.confirmPassword ? "input-error" : ""}
        />
        {errors.confirmPassword && (
          <p className="error">{errors.confirmPassword}</p>
        )}
      </div>
      <button type="submit" disabled={isSubmitting}>
        Kaydet
      </button>
      <Link to="/portal" className="formlink">
        Portala Git
      </Link>
    </form>
  );
};

export default GeneralForm;
