/*=============================================
Sweetalert
=============================================*/
import Swal from "sweetalert2";
export let Sweetalert = {

    fnc:function(type, text, url){

        switch (type) {

            case "error":

            if(url == null){

                Swal.fire({
                    icon: 'error',
                    title: 'Error',
                    text: text
                }) 

            }else{

                Swal.fire({
                    icon: 'error',
                    title: 'Error',
                    text: text
                }).then((result) => {

                    if (result.value) { 

                        window.open(url, "_top")
                    }

                })

            } 

            break; 

            case "success":

            if(url == null){

                Swal.fire({
                    icon: 'success',
                    title: 'Success',
                    text: text
                }) 

            }else{

                Swal.fire({
                    icon: 'success',
                    title: 'Success',
                    text: text
                }).then((result) => {

                    if (result.value) { 

                        window.open(url, "_top")
                    }

                })

            } 

            break; 

            case "warning":

            if(url == null){

                Swal.fire({
                    icon: 'warning',
                    title: 'warning',
                    text: text
                }) 

            }else{

                Swal.fire({
                    icon: 'warning',
                    title: 'warning',
                    text: text
                }).then((result) => {

                    if (result.value) { 

                        window.open(url, "_top")
                    }

                })

            } 

            break; 

            case "loading":

              Swal.fire({
                allowOutsideClick: false,
                icon: 'info',
                text:text
              })
              Swal.showLoading()

            break;

            case "html":

            Swal.fire({
                allowOutsideClick: false,
                title: 'Click to continue with the payment...',
                icon: 'info',
                html:text,
                showConfirmButton: false,
                showCancelButton: true,
                cancelButtonColor: '#d33'
            })

            break;

            case "close":

                Swal.close()

            break;

        }

       
    }

}