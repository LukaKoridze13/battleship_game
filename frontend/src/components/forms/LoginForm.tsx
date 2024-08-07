import { FormProvider, useForm } from 'react-hook-form';
import Content from '../containers/Content';
import FullPage from '../containers/FullPage';
import Form from './Form';
import Input from './Input';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

const loginSchema = yup.object({
  username: yup.string().required('Username is required').min(4, 'Min. 4 symbols').max(20, 'Max. 4 symbols'),
  password: yup.string().required('Password is required').min(6, 'Min. 6 symbols'),
});

const LoginForm = () => {
  const methods = useForm({
    resolver: yupResolver(loginSchema),
    mode: 'all',
  });

  const onSubmit = (data: any) => console.log(data);

  return (
    <FullPage>
      <Content className="flex h-full items-center justify-center">
        <FormProvider {...methods}>
          <Form onSubmit={methods.handleSubmit(onSubmit)} type="login" title="Login" button="login">
            <Input name="username" placeholder="username" type="string" />
            <Input name="password" placeholder="password" type="password" />
          </Form>
        </FormProvider>
      </Content>
    </FullPage>
  );
};

export default LoginForm;
