<template>
  <transition name="fade" appear>
    <div class="modal-overlay" v-show="profileEditModal">
      <form id="modal" @submit.prevent="handleSubmit">
        <!-- nav -->
        <div class="modal-nav">
          <img
            class="modal-nav-icon"
            src="@/assets/images/close-modal-icon.svg"
            alt="close modal"
            @click="closeModal"
          />
          <span class="modal-nav-title">編輯個人資料</span>
          <button
            type="submit"
            class="btn modal-nav-button"
            :disabled="isProcessing"
          >
            儲存
          </button>
        </div>
        <!-- pic edit -->
        <div class="modal-img">
          <div class="modal-img-icon">
            <img
              class="modal-img-icon-camera"
              src="@/assets/images/camera-icon.svg"
              alt="close modal"
            />
            <img
              class="modal-img-icon-close"
              src="@/assets/images/close-img-icon.svg"
              alt="close modal"
            />
          </div>
          <img class="modal-img-cover" :src="cover" />
          <img class="modal-img-avatar" :src="avatar" />
          <img
            class="modal-img-avatar-camera"
            src="@/assets/images/camera-icon.svg"
            alt="close modal"
          />
        </div>
        <!-- name, introduction edit -->
        <div class="modal-input">
          <div class="modal-input-group">
            <div
              class="modal-input-group-input"
              :class="{ 'input-error': nameLengthError }"
            >
              <label for="name">名稱</label>
              <input type="text" id="name" name="name" v-model.trim="name" />
            </div>
            <div class="input-hint-container">
              <div class="error-message" v-show="nameLengthError">
                字數超出上限!
              </div>
              <span class="length-hint">{{ nameLength }}/50</span>
            </div>
          </div>

          <div class="modal-input-group">
            <div
              class="modal-input-group-input intro"
              :class="{ 'input-error': introLengthError }"
            >
              <label for="name">自我介紹</label>
              <textarea
                name="introduction"
                id="introduction"
                v-model.trim="introduction"
              ></textarea>
            </div>
            <div class="input-hint-container">
              <div class="error-message" v-show="introLengthError">
                字數超出上限！
              </div>
              <span class="length-hint">{{ introLength }}/160</span>
            </div>
          </div>
        </div>
      </form>
    </div>
  </transition>
</template>

<script>
import { mapState } from "vuex";
import { mapGetters } from "vuex";

export default {
  name: "ProfileUser",
  // props: {
  //   initialUser: {
  //     type: Object,
  //     required: true,
  //   },
  // },
  data() {
    return {
      nameLengthError: false,
      introLengthError: false,
      id: -1,
      name: "",
      cover: "",
      avatar: "",
      introduction: "",
    };
  },
  created() {
    this.cover = this.getCurrentUser.cover || "";
    this.avatar = this.getCurrentUser.avatar || "";
    this.name = this.getCurrentUser.name || "";
    this.introduction = this.getCurrentUser.introduction || "";
    this.userId = this.getCurrentUser.id;
  },

  methods: {
    closeModal() {
      this.$store.commit("toggleProfileEditModal");
      this.name = this.getCurrentUser.name || "";
      this.introduction = this.getCurrentUser.introduction || "";
    },
  },
  computed: {
    ...mapState(["profileEditModal"]),
    ...mapGetters(["getCurrentUser"]),
    nameLength() {
      return this.name.length;
    },
    introLength() {
      return this.introduction.length;
    },
  },
  watch: {
    name() {
      if (this.name.length > 50) {
        this.nameLengthError = true;
      } else {
        this.nameLengthError = false;
      }
    },
    introduction() {
      if (this.introduction.length > 160) {
        this.introLengthError = true;
      } else {
        this.introLengthError = false;
      }
    },
  },
};
</script>

<style lang="scss">
@import "../assets/styles/_EditModal.scss";
</style>