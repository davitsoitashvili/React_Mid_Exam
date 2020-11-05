import { LoginInputs } from "../../../constants";
import Button from "../../presentation/Button";
import Input from "../../presentation/Input";
import Form from "../Form/Form";

function LoginForm({onSubmit}) {
    return (
      <>
        <Form className="form-signin" onSubmit={onSubmit}>
          <Input {...LoginInputs.email} />
          <Input {...LoginInputs.password} />
          <Button {...LoginInputs.button} />
        </Form>
      </>
    );
  };

export default LoginForm;
