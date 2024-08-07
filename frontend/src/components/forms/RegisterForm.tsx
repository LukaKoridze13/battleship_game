import { FormProvider, useForm } from 'react-hook-form';
import Content from '../containers/Content';
import FullPage from '../containers/FullPage';
import Form from './Form';
import Input from './Input';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

const registerSchema = yup.object({
  username: yup.string().required('Username is required'),
  password: yup.string().required('Password is required'),
  repeat_password: yup.string().required('Repeat password is required'),
});

const RegisterForm = () => {
  const methods = useForm({
    resolver: yupResolver(registerSchema),
    mode: 'all',
  })

  const onSubmit = (data: any) => console.log(data);

  return (
    <FullPage>
      <Content className="flex h-full items-center justify-center">
        <FormProvider {...methods}>
          <Form onSubmit={methods.handleSubmit(onSubmit)} type="register" title="Registration" button="create account">
            <Input name="username" placeholder="username" type="string" />
            <Input name="password" placeholder="password" type="passord" />
            <Input name="repeat_password" placeholder="repeat password" type="passord" />
          </Form>
        </FormProvider>
      </Content>
    </FullPage>
  );
};

export default RegisterForm;
