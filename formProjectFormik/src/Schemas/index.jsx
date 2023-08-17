import * as yup from "yup";
const passwordRule = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}$/;
export const basicSchema = yup.object().shape({
  email: yup
    .string()
    .email("Geçerli bir email giriniz")
    .required("Email girmek zorundasınız"),
  age: yup
    .number()
    .positive("Lütfen pozitif bir yaş giriniz")
    .integer("Lütfen yaşınızı tam sayı olarak giriniz")
    .required("Yaşınızı girmek zorundasınız"),
  password: yup
    .string()
    .min(6, "Lütfen minimum 6 karakter giriniz")
    .matches(passwordRule, {
      message: "Lütfen en az 1 büyük harf, 1 küçük harf ve 1 sayı giriniz",
    })
    .required("Şifre girmek zorundasınız"),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password")], "Şifreler eşleşmiyor")
    .required("Şifrenin tekrarını girmek zorundasınız"),
});
export const advencedSchema = yup.object().shape({
  username: yup
    .string()
    .min(6, "Kullanıcı adı minimum 6 karakter olmalıdır")
    .required("Kullanıcı adı girmek zorundasınız"),
  university: yup
    .string()
    .oneOf(["bogazici", "gsu", "odtü", "itü"], "Lütfen üniversitenizi seçiniz")
    .required("Lütfen üniversitenizi seçiniz"),
  isAccapted: yup
    .boolean()
    .oneOf([true], "Kullanım koşullarını kabul ediniz")
    .required("Kullanım koşullarını kabul ediniz"),
});
