import { Text, View } from 'react-native'
import { Button } from '../../atoms/button/button'
import { Input } from '../../atoms/input/input'
import { useLogin } from './use-login/use-login'
import { UserFormStyle } from './user-form-style'
import { FC, useState } from 'react'
import { ErrorModal } from '../../atoms/modal/error-modal'


interface UserFormProps {}

export const UserForm: FC<UserFormProps> = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [showErrorModal, setShowErrorModal] = useState(false);

  const { handleSubmit } = useLogin();

  const handleLogin = () => {
    if (username === 'carlos' && password === 'carlos12') {
      handleSubmit();
    } else {
      setErrorMessage('La Contraseña o Usurio son incorrectos');
      setShowErrorModal(true);
    }
  };

  const handleModalClose = () => {
    setShowErrorModal(false);
    setErrorMessage('');
  };

  return (
    <View>
      <Input placeholder='Usuario' onChange={(value) => setUsername(value)} />
      <Input placeholder='Contraseña' secureTextEntry={true} onChange={(value) => setPassword(value)} />
      <View style={UserFormStyle.separator}></View>
      {showErrorModal && <ErrorModal visible={showErrorModal} message={errorMessage} onClose={handleModalClose} />}
      <View style={UserFormStyle.buttonWrapper}>
        <Button text='Entrar' onPress={handleLogin} />
      </View>
    </View>
  );
};
