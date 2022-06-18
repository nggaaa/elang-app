"use strict";
// document ready

$(document).ready(function () {
  $("#logoutTrigger").click(() => {
    Swal.fire({
      title: "Peringatan",
      text: "Yakin ingin logout?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      cancelButtonColor: "#3085d6",
    }).then((result) => {
      if (result.isConfirmed) {
        localStorage.clear();
        sessionStorage.clear();
        window.location.href = "./auth/login.html";
      }
    });
  });
});

var user, userdata;
if (localStorage.api_token) user = localStorage;
else user = sessionStorage;

$.ajax({
  type: "POST",
  url: env.server + "/user",
  async: false,
  data: {
    api_token: user.api_token,
  },
  success: (data) => {
    console.log(data);
    $(".user_short_name").html(data.name.split(" ").slice(0, 2).join(" "));
    $(".user_name").html(data.name);
    userdata = data;
  },
});

// get url param
function getUrlParam(name) {
  var results = new RegExp("[?&]" + name + "=([^&#]*)").exec(
    window.location.href
  );
  if (results == null) {
    return null;
  } else {
    return results[1] || 0;
  }
}

// Sort Object in array
const sort_by = (field, reverse, primer) => {
  const key = primer
    ? function (x) {
        return primer(x[field]);
      }
    : function (x) {
        return x[field];
      };

  reverse = !reverse ? 1 : -1;

  return function (a, b) {
    return (a = key(a)), (b = key(b)), reverse * ((a > b) - (b > a));
  };
};
