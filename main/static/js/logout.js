$('ul.logout a').click(function(event) {
  event.preventDefault();
  $.ajax({ 
    type: "POST",
    url: $(this).attr('href'),
    xhrFields: {
         withCredentials: true
    },
    crossDomain: true,
    success: function(resp){
      if (resp.ok)
        document.location.href = resp.redir || "http://auth.iood.ru/user/login";
      }
  });
});