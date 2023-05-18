
var interviewEglibilty = function(gradScore,hscScore,sscScore,candidateName) {
    var result = gradScore>=70 || hscScore>=80 || sscScore>90 ? `Congratulation ${candidateName} you are eligible for TCS interview`:`Unfournately ${candidateName} you are not eligible for interview`;
    console.log(result);
}
var result1 = interviewEglibilty(80,86,90,"Devika");
var result2 = interviewEglibilty(70,65,55,"Divya");
var result3 = interviewEglibilty(60,79,88,"snehal")