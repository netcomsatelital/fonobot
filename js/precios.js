$(document).ready(function() {

  Number.prototype.formatMoney = function(c, d, t) {
  var n = this, 
      c = isNaN(c = Math.abs(c)) ? 2 : c, 
      d = d == undefined ? "." : d, 
      t = t == undefined ? "," : t, 
      s = n < 0 ? "-" : "", 
      i = String(parseInt(n = Math.abs(Number(n) || 0).toFixed(c))), 
      j = (j = i.length) > 3 ? j % 3 : 0;
     return s + (j ? i.substr(0, j) + t : "") + i.substr(j).replace(/(\d{3})(?=\d)/g, "$1" + t) + (c ? d + Math.abs(n - i).toFixed(c).slice(2) : "");
  };


  $('#form_presupuesto').on('submit', function() {
    return false;
  });

  var refresh = function() {
    $('.price-item-value').each(function (x) {
      var price = $(this).text().replace(',', '.');
      var rate_id = $('#monedas').val();
      var rate = _precios_list[rate_id].rate;
      var count = Math.round(($('#presupuesto').val()) / rate / price);
      $(this).parent().parent().find('.price-item-count').first().text(count.formatMoney(0, ',', '.'));
    });
  };
  
  _precios_moneda_prev = $('#monedas').val();

  $('#monedas').on('change', function () {
    var moneda_cur = $('#monedas').val();
    var rate_prev = _precios_list[_precios_moneda_prev].rate;
    var rate_cur  = _precios_list[moneda_cur].rate;

    var valor_cur = $('#presupuesto').val();
    $('#presupuesto').val(Math.round(valor_cur / rate_prev * rate_cur));

    _precios_moneda_prev = moneda_cur;

    refresh();
  });
  $('#presupuesto').on('change', refresh).trigger('change');
});

