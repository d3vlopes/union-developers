import { useSubscriptionForm } from '@/presentation/hooks'

import { PersonalInfoStepType } from '../../PersonalInfo/hooks'

export const SuccessMessage = () => {
  const { formData } = useSubscriptionForm<PersonalInfoStepType>()

  const { fullName, email } = formData

  return (
    <>
      <img
        src="https://media.graphassets.com/05PPTFLdTGWFD091Jes1"
        alt="Ícone de positivo, representando que a inscrição foi realizada com sucesso"
      />
      <h3>Inscrição realizada com sucesso!</h3>
      <p>
        Obrigado <strong>{fullName ?? ''}</strong> por querer fazer
        parte do Union, em breve nossa equipe vai entrar em contato
        pelo seu email {''}
        <strong>{email ?? ''}</strong>, fique atento.
      </p>
    </>
  )
}
