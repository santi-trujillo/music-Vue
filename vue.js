/*
var app = new Vue({
    el: '#app-1',
    data: {
        message: 'EEEHHH! LO LOGRE'
    }
})
*/

/*
var app2 = new Vue({
    el: '#app-2',
    data: {
        message: 'Hoy es: ' + new Date().toLocaleString(),
        newClass: 'paraPrueba'
    }
})
*/

/*
var app3 = new Vue({
    el: '#app-3',
    data: {
        seen: true
    }
})
*/

/*
var app4 = new Vue({
    el: '#app-4',
    data: {
        todos: [
            { text: '1', desc: 'lo que sea' },
            { text: '2', desc: 'otro texto' },
            { text: '3' },
            { text: '4' },
            { text: '5' },
            { text: '6' },
            { text: '7' },
            { text: '8' }
        ]
    }
})
*/

/*
var app5 = new Vue({
    el: '#app-5',
    data: {
        message: 'Este no lo entendi muy bien',
        mensaje2: 'lo estoy entendiendo mejor'
    },
    computed: {
        mensajeCompleto: function () {
            return this.message + this.mensaje2
        }
    },
    methods: {
        reverseMessage: function () {
            this.message = this.message.split('').reverse().join('')
        },
        loQueSea: function () {
            this.mensaje2 = this.mensaje2.toUpperCase()
        }
    }
})
*/

/*
var app6 = new Vue({
    el: '#app-6',
    data: {
        message: 'Uno mas Maito'
    }
})
*/



var messages =  new Vue({
    el: "#appForm",
    data: {
      formData: {
        imgAlbum: '',
        nameAlbum: '',
        imgArtist: '',
        nameArtist: '',
      },
      lista: [
      ]
    },
    methods: {
      formSub() {
        this.formData.show = !this.formData.show
      },
      addAlbum() {
        var newData = {
            imgAlbum: this.formData.imgAlbum,
            nameAlbum: this.formData.nameAlbum,
            imgArtist: this.formData.imgArtist,
            nameArtist: this.formData.nameArtist
        }
        this.lista.push(newData)
      }
    }
  });