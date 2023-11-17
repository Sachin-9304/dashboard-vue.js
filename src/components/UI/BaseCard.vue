<template>
    <div>
        <header>
                <h3>
                    <span class="highlight">{{name}}</span>
                </h3>
            </header>
         <span class="highlight1">{{email}}</span>
    </div>
</template>

<script>
export default {
    props: ['name','email'],
};

</script>


<style scoped>
    div {
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  padding: 1rem;
  margin: 2rem auto;
  max-width: 40rem;
}
header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

h3 {
  font-size: 1.25rem;
  margin: 0.5rem 0;
}

.highlight {
  font-weight: bold;
}
.highlight1 {
  color: #008327;
}

</style>