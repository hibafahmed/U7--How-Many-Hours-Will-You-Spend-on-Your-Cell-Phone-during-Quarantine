  let Name;
  let Weekstotal;
  let Hoursperweek;
  let Daysperweek = 7;
  let Hoursperday=24.0;
  let Answer;
let Daystotal;

  $(".Calculate").click(function() {
      Name = $(".nombre").val();
      console.log(Name);

  });

  $(".Calculate").click(function() {
      Weekstotal = $(".weekstotal").val();
      console.log(Weekstotal);

  });
  $(".Calculate").click(function() {
      Hoursperweek = $(".hoursperweek").val();
console.log(Hoursperweek);
  });

  $(".Calculate").click(function() {
      Answer = (Number(Weekstotal) * Number(Hoursperweek)) * Daysperweek;
      console.log(Answer);
      Daystotal= (Number(Answer)/Number(Hoursperday));
        $(".intro").hide();
      $(".questions").hide();
      $(".aftersubmit").text(`Dear ${Name}, by the end of quarantine, which will be ${Weekstotal} weeks total, you will have spent ${Answer} hours total on your cellphone. That is equal to ${Daystotal} days! Be well and stay safe.`);
       
  });