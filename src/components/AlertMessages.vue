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
    },
    show_YesNo () {
      Swal.fire({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete it!'
      }).then((result) => {
        if (result.isConfirmed) {
          Swal.fire({
            title: 'Deleted!',
            text: 'Your file has been deleted.',
            icon: 'success'
          })
        }
      })
    }
  }
}
</script>
