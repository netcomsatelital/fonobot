
var addEvent = function( obj, type, fn ) {
  if (obj.addEventListener)
    obj.addEventListener(type, fn, false);
  else if (obj.attachEvent) 
    obj.attachEvent('on' + type, function() { return fn.apply(obj, new Array(window.event));});
}



addEvent(window, 'load', function () {
  if (document.getElementById) {
    var form = document.getElementById('negocio_form');

    form.onsubmit = function() {
      var form1_status = document.getElementById('form1_status');
      form1_status.className = 'alert alert-info';
      form1_status.innerHTML = 'Enviando mensaje...';

      var form1_submit = document.getElementById('form1_submit');
      form1_submit.disabled = true;


      var ajaxForm = new sack();

      ajaxForm.requestFile = form.action;
      ajaxForm.form1_status = form1_status;
      ajaxForm.form1_submit = form1_submit;
      ajaxForm.onCompletion = function() {
        this.form1_status.className = 'alert alert-success';
        this.form1_status.innerHTML = 'El mensaje fue enviado.';
        document.getElementById('form1_nombre').value = '';
        document.getElementById('form1_email').value = '';
        document.getElementById('form1_telefono').value = '';
        document.getElementById('form1_cv').value = '';

        this.form1_submit.disabled = false;
      }
      ajaxForm.onError = function() {
        this.form1_status.className = 'alert alert-danger';
        this.form1_status.innerHTML = 'Error enviando mensaje. Por favor vuelta a intentarlo mas tarde.';

        this.form1_submit.disabled = false;
      }
      ajaxForm.setVar('ajax', 1);
      /*
      ajaxForm.setVar('form1_nombre', document.getElementById('form1_nombre').value);
      ajaxForm.setVar('form1_email', document.getElementById('form1_email').value);
      ajaxForm.setVar('form1_telefono', document.getElementById('form1_telefono').value);
      */
      ajaxForm.runAJAX();
      return false;
    }
  }
}
);
