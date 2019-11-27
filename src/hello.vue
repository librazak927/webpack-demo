    <template>
      <div class="hello">Hello {{ name }}</div>
    </template>

    <script>
    export default {
        data() {
            return {
                name: "Vue"
            }
        }
    }
    </script>

    <style scoped>
    .hello {
        color: blue;
    }
    </style>