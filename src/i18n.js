import { createI18n } from 'vue-i18n'

const messages = {
  en: {
    home: {
      title: `We're having a baby!!!`,
      guess: `Guess our future baby's gender, name, size and weight to discover at least the gender<br><span class="italic text-sm lg:text-md">Expected birth date: March 12</span>`,
      challenge: `The closest person to the right answer may win a cool prize!`,
      cta: `START GUESSING!`,
    },
    form: {
      slidebb: {
        sideTitleLeft: `It's a girl`,
        sideSubtitleLeft: `Oh you think it's gonna be a girl?`,
        sideTextButtonLeft: `CHANGE FOR A BOY!`,
        sideTitleRight: `It's a boy`,
        sideSubtitleRight: `Oh you think it's gonna be a boy?`,
        sideTextButtonRight: `CHANGE FOR A GIRL!`,
      },
      error: `Invalid form`,
      name: `Baby's name`,
      height: `Height`,
      heightUnit: `cm`,
      weight: `Weight`,
      weightUnit: `kg`,
      birthDate: `Birth date`,
      submit: `SEND`,
    },
    reveal: {
      pulse: {
        heartbeat: `Baby's heartbeat`,
        tap: `Tap to reveal<br>the gender`
      },
      instruction: `Drag the screen to discover our baby's&nbsp;gender...`,
      questionBoy: `or is it a boy?`,
      questionGirl: `Is it a girl...`,
      babyGirl: `We're having a baby girl!!!`,
      babyGirlSubtitle: `A beautiful blue smurfette`,
      babyBoy: `We're having a baby boy!!!`,
      babyBoySubtitle: `a Pink Floyd newcomer?`,
      thanks: {
        title: `Thank you for participating!`,
        giveCode: `If you're a friend, co-worker or a family member, give us the code you just had<br class="hidden lg:block">&nbsp;so we can validate your participation for the little prize draw`,
        myCode: `My code:`,
        support: `Support us!`,
        share: `Share, like, follow, and see you tomorrow!`,
      },
    }
  },
  fr: {
    home: {
      title: `On va avoir un bébé !!!`,
      guess: `Devinez le genre, le nom, la taille et le poids de notre futur enfant pour découvrir au moins son genre<br><span class="italic text-sm lg:text-md">date prévue du terme: 12 Mars</span>`,
      challenge: `La personne la plus proche de la bonne réponse remportera peut être un cadeau !`,
      cta: `JE VEUX DEVINER`,
    },
    form: {
      slidebb: {
        sideTitleLeft: `C'est une fille`,
        sideSubtitleLeft: `Tu penses que ce sera une fille ?`,
        sideTextButtonLeft: `CHANGER POUR UN GARÇON`,
        sideTitleRight: `C'est un garçon`,
        sideSubtitleRight: `Tu penses que ce sera un garçon ?`,
        sideTextButtonRight: `CHANGER POUR UNE FILLE`,
      },
      error: `Formulaire invalide`,
      name: `Prénom du bébé`,
      height: `Taille`,
      heightUnit: `cm`,
      weight: `Poids`,
      weightUnit: `kg`,
      birthDate: `Jour de naissance`,
      submit: `VALIDER`,
    },
    reveal: {
      pulse: {
        heartbeat: `Baby's heartbeat`,
        tap: `Toucher pour<br>découvrir le genre`
      },
      instruction: `Tirer sur l'ecran pour découvrir le genre de notre bébé...`,
      questionBoy: `ou est-ce un garçon ?`,
      questionGirl: `Est-ce une fille...`,
      babyGirl: `On va avoir une petite fille !!!`,
      babyGirlSubtitle: `Une belle schtroumpfette bleue`,
      babyBoy: `On va avoir un petit garçon !!!`,
      babyBoySubtitle: `un nouveau Pink Floyd ?`,
      thanks: {
        title: `Merci d'avoir participé !`,
        giveCode: `Si vous êtes un.e ami.e, collègue ou membre de la famille, donnez-nous le code que vous venez d'avoir<br class="hidden lg:block">&nbsp;pour que l'on puisse valider votre participation au tirage au sort`,
        myCode: `Mon code:`,
        support: `Nous soutenir`,
        share: `Share, like, follow, and see you tomorrow!`,
      },
    }
  }
}



export const i18n = createI18n({
  // something vue-i18n options here ...
  locale: navigator.language.indexOf('fr') !== -1 ? 'fr' : 'en', // set locale
  fallbackLocale: 'en', // set fallback locale
  messages, // set locale messages
  // If you need to specify other options, you can set other options
  // ...
})