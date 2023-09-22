import * as yup from 'yup';

export const gymValidationSchema = yup.object().shape({
  description: yup.string().nullable(),
  image: yup.string().nullable(),
  name: yup.string().required(),
  localization: yup.string().nullable(),
  user_id: yup.string().nullable().required(),
});
