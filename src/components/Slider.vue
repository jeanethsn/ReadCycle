<template>
  <div class="relative w-full h-auto md:h-[656px] bg-[#FBFBFB] overflow-hidden">
    <img
      src="../images/ilustracion-izquierda.png"
      alt="people reading left side"
      class="absolute top-20 left-20 md:left-30 w-[100px] md:w-[150px] h-auto"
    />
    <img
      src="../images/ilustracion-derecha.png"
      alt="people reading right side"
      class="absolute top-40 -right-10 md:right-24 w-1/3 md:w-[150px] h-auto"
    />
    <div
      class="relative z-10 flex flex-col justify-center items-center text-center w-full h-full p-8 md:p-8"
    >
      <div class="flex flex-col p-8 font-serif w-[80%] gap-5 md:gap-8 max-w-lg">
        
        <img
      src="../images/woman.png"
      alt="people reading right side"
      class=""
    />
        <h1
          class="text-[2rem] leading-[3rem] font-bold md:text-5xl lg:text-[1.3rem] text-[#EB562B] tracking-[0.5rem]"
        > LEE, COMPARTE, RECICLA
          </h1>
        <p class="font-sans font-regular sm:text-lg lg:text-xl">
          La mejor plataforma para intercambiar libros usados, diseñada para conectar a personas que comparten una pasión por la lectura y apoyar una economía sostenible.
        </p>
        <div
          class="flex flex-col md:flex-row justify-center items-center gap-2 md:gap-4 text-base md:text-lg font-sans  w-full max-w-lg md:max-w-xl mx-auto"
        >
          <RouterLink
            class="text-primary border-2 bg-white border-[#4E989F] py-3 px-5 rounded-full hover:bg-[#4E989F] hover:text-white text-base md:text-lg w-auto md:w-auto"
          to="/search-book"
          >
            Buscar libro
          </RouterLink>
          <RouterLink
          class="bg-[#4E989F] py-3 px-5 text-white rounded-full text-base md:text-lg w-auto md:w-auto hover:bg-[#115D67]"
            
            to="/offer-book"
          >
            Ofrecer Libro
          </RouterLink>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Slider",
  
};
</script>
