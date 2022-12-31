import { View } from 'react-native'
import { Button } from '../../atoms/button/button'
import { Input } from '../../atoms/input/input'
import { useLogin } from './use-login/use-login'
import { UserFormStyle } from './user-form-style'

export const UserForm = () => {
  const { handleSubmit } = useLogin();
  return (
    <View>
      <Input placeholder='User' onChange={(value) => console.log(value)}/>
      <Input placeholder='Password' onChange={(value) => console.log(value)}/>
      <View style={UserFormStyle.separator}></View>
      <View style={UserFormStyle.buttonWrapper}>
        <Button text='Login' onPress={handleSubmit}/>
      </View>
    </View>
  )
}