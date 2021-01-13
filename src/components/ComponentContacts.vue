<template>
  <div>
    <p v-for="(contact, index) of contacts"
      :key="index"
      class="main-text"
    >
      {{ contact.text }}
      <a :href="contact.link"
        class="main-link"
      >
        {{contact.contact}}
      </a>
    </p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      contacts: [
        {
          text: 'Телефон для связи: ',
          contact: '+7 (930) 309 8073',
          link: 'tel:+79303098073',
        },
        {
          text: 'WhatsApp: ',
          contact: '+7 (964) 792 0775',
          link: 'https://wa.me/79647920775',
        },
        {
          text: 'Viber: ',
          contact: '+7 (964) 792 0775',
          link: 'viber://chat?number=%2B79647920775',
        },
        {
          text: 'Telegram: ',
          contact: 'https://t.me/Strixis',
          link: 'https://t.me/Strixis',
        },
      ],
    };
  },
}
</script>
