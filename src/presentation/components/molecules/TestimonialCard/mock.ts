import { TestimonialCardProps } from '.'

export const testimonialCardMock: TestimonialCardProps = {
  id: '1',
  imgUrl:
    'https://res.cloudinary.com/dbnq26wqe/image/upload/v1674860826/union/Rectangle_20_2_wxas7x.jpg',
  name: 'John Doe',
  testimonialText:
    'Gostei de trabalhar em equipe, com pessoas legais que possuem mais experiências e te dão um direcionamento de como se portar e ter um pensamento crítico. Descobri inúmeras tecnologias, melhorei meu código e tive um aprendizado mais rápido. Foi muito organizado, objetivo e transparente. Me sinto preparado para o mercado de trabalho!',
  socialLinks: [
    {
      id: '1',
      name: 'Linkedin',
      iconUrl: 'https://media.graphassets.com/7HrDbWyS7mrZLcrvg9od',
      url: 'http://www.likedin.com/profile',
    },
    {
      id: '2',
      name: 'Github',
      iconUrl: 'https://media.graphassets.com/3ib0CcSqSeyUbjFOeHVv',
      url: 'http://www.github.com/profile',
    },
  ],
}
