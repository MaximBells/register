var app = new Vue({
  el: '#app',
  data: {
    name: null,
    surname: null,
    father: null,
    dayB: null,
    monthB: null,
    yearB: null,
    phone: null,
    male:false,
    female: false,
    vIP: false,
    problem: false,
    oMS: false,
    healer: null,
    sMS: false,
    index: null,
    country: null,
    oblast: null,
    town: null,
    street: null,
    home: null,
    type: null,
    seria: null,
    nomer: null,
    kemvidan: null,
    dayV: null,
    monthV:null,
    yearV: null,
    modal:false,
    right: true
  },
  methods:{
    check: function(){
      if (  this.name == null || this.name == ""
          || this.surname == null || this.surname == ""
          || this.monthB == null || this.monthB == ""
          || this.dayB == null || this.dayB == ""
          || this.yearB == null || this.yearB == ""
          || this.phone == null || this.phone == ""
          || this.vIP == false && this.problem == false && this.oMS == false
          || this.town == null || this.town == ""
          || this.type == null || this.type == ""
          || this.dayV == null || this.dayV == ""
          || this.monthV == null || this.monthV == ""
          || this.yearV == null || this.yearV == ""
          ||  Math.trunc(app.phone/10000000000)!=7 || Math.trunc(app.phone/100000000000)!=0){
        this.right = false
      } else {
        this.right = true
      }
    }
  }
})
