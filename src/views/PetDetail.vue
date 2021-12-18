<template>
  <div class="profile">
    <PetProfileBasic
      :id="futureBestFriendsId"
      :name="futureBestFriendInfo.name"
      :location="futureBestFriendInfo.location"
      :portrait="futureBestFriendInfo.image_url"
      :basicProfile="{
        Especie: futureBestFriendInfo.species,
        Sexo: futureBestFriendInfo.sex,
        Medida: futureBestFriendInfo.size,
        'Fecha de nacimiento': futureBestFriendInfo.birth_date,
        Estado: futureBestFriendInfo.status
      }" />
    <PetProfileHistory :bio="futureBestFriendInfo.bio" />
    <div class="profile--bottom">
      <PetProfilePersonality :personality="futureBestFriendInfo.personality" />
      <PetProfileStatus :handle_status="futureBestFriendInfo.handle_status" />
      <PetProfileNotes :info_notes="futureBestFriendInfo.info_notes" v-if="futureBestFriendInfo.info_notes.length > 0" />
    </div>
  </div>
  <PetProfileActions :name="futureBestFriendInfo.name" />
</template>

<script>
import PetProfileBasic from '../components/PetProfileBasic.vue'
import PetProfileHistory from '../components/PetProfileHistory.vue'
import PetProfilePersonality from '../components/PetProfilePersonality.vue'
import PetProfileStatus from '../components/PetProfileStatus.vue'
import PetProfileNotes from '../components/PetProfileNotes.vue'
import PetProfileActions from '../components/PetProfileActions.vue'

import futureBestFriendsInfo from '../assets/pets.json'

export default {
  name: 'PetDetail',
  components: {
    PetProfileBasic,
    PetProfileHistory,
    PetProfilePersonality,
    PetProfileStatus,
    PetProfileNotes,
    PetProfileActions
  },
  data () {
    return {
      futureBestFriendsId: this.$route.params.id
    }
  },
  computed: {
    futureBestFriendInfo () {
      return futureBestFriendsInfo.data.find(pet => pet.id === Number(this.futureBestFriendsId))
    }
  }
}
</script>

<style lang="scss">
.profile {
  max-width: var(--layout-maxWidth);
  margin-left: auto;
  margin-right: auto;
  padding: 135px 35px 0px;

  &--bottom {
    display: flex;
    flex-direction: column;
    width: 100%;

    @media screen and (min-width: 1440px) {
      flex-direction: row;
      justify-content: space-between;
    }
  }
}
</style>
