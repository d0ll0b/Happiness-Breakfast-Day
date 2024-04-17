<template>
  <div></div>
</template>

<script>
import Swal from 'sweetalert2'

export default {
  data () {
    return {}
  },
  methods: {
    show_toast (Msg, timer = 3000, type = 'success') {
      Swal.fire({
        title: Msg,
        icon: type,
        toast: true,
        position: 'top-end',
        showConfirmButton: false,
        timerProgressBar: true,
        timer
      })
    },
    show_alert (Msg, timer = 1000, type = 'success') {
      Swal.fire({
        position: 'top',
        icon: type,
        title: Msg,
        showConfirmButton: false,
        timer
      })
    }
    // 暫不使用，測試有問題
    // show_YesNo (Msg) {
    //   Swal.fire({
    //     title: Msg,
    //     icon: 'warning',
    //     showCancelButton: true,
    //     confirmButtonColor: '#A9E2F0',
    //     cancelButtonColor: '#d33',
    //     confirmButtonText: '是的',
    //     cancelButtonText: '考慮一下'
    //   }).then((result) => {
    //     if (result.isConfirmed) {
    //       this.checkYesNo(true)
    //     }
    //   })
    // },
    // checkYesNo (YesNo) {
    //   this.$emit('checkYesNo', YesNo)
    // }
  }
}
</script>
