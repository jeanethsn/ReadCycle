<template>
  <Slider />

  <h3 class="font-serif text-[1.2rem] text-[#EB562B] tracking-[0.5rem] font-bold bg-[#FBFBFB] ">ÚLTIMOS LIBROS AÑADIDOS</h3>
  <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 p-10 pl-20 bg-[#FBFBFB] ">
    <BookCard
      v-for="availableBook in availableBooks"
      :key="availableBook.isbn"
      :book="availableBook"
    />
    
  </div>

  <section class="grid grid-cols-1 text-left md:grid-cols-2 md:px-16 p-8 py-16 md:py-36 bg-[#FBFBFB] ">
  <div>
    <div class="flex flex-col gap-[1rem]">
      <p class="font-bold text-lg text-[#4E989F] tracking-[0.5rem]">RECICLA TUS LIBROS</p>
      <h3 class="font-serif text-3xl md:text-[1.5rem] font-bold text-[#EB562B] tracking-[0.5rem] uppercase">
        Compartetus libros <br class="hidden md:block">en 3 pasos
      </h3>
    </div>
    <div class="space-y-8 mt-8 pr-0 md:pr-20">
      <div class="flex gap-4 items-start">
        <img src="../images/book-icon.svg" alt="Icono de libro" class="w-12 h-12" />
        <div>
          <h6 class="font-bold text-lg">Publica tu libro</h6>
          <p>
            Llena un formulario con los detalles del libro que quieres
            intercambiar.
          </p>
        </div>
      </div>
      <div class="flex gap-4 items-start">
        <img src="../images/chat-icon.svg" alt="Icono de chat" class="w-12 h-12" />
        <div>
          <h6 class="font-bold text-lg">Contacta a otros Usuarios</h6>
          <p>
           Si hay alguna persona interesada te enviaremos un email con sus datos
          </p>
        </div>
      </div>
      <div class="flex gap-4 items-start">
        <img src="../images/share-icon.svg" alt="Icono de compartir" class="w-12 h-12" />
        <div>
          <h6 class="font-bold text-lg">Comparte y disfruta</h6>
          <p>
            Queda en un lugar conveniente para realizar el intercambio y
            disfruta de tu nueva lectura.
          </p>
        </div>
      </div>
    </div>
  </div>

  <img class="self-right w-[600px] mt-16 md:mt-0" src="../images/share-your-books-ilustration.svg" alt="Mujer volando con un libro" />
</section>

</template>

<script>
import Slider from "../components/Slider.vue";
import BookCard from "../components/BookCard.vue";
import { mapActions, mapState } from 'pinia'
import { useUsersBooksStore } from "../store/usersBooksStore";
import { onMounted, computed } from "vue";

export default {
  components: {
    BookCard,
    Slider,
  },
  
  computed: {
    ...mapState(useUsersBooksStore, ['usersBooks']),
    
    availableBooks() {
      return this.usersBooks.filter(book => book.status == true).sort((a, b) => b.id - a.id);
    },
  },
  
  methods: {
    ...mapActions(useUsersBooksStore, ['booksForCards']),
  },
  
};
</script>