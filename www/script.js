$tswizzle = $('<li data-icon = "navigation"><a href = "">11:00 AM - Taylor Swift on Stage A <a href = "#map"></a></a></li>');
$passenger = $('	<li data-icon = "navigation"><a href = "">12:00 PM - Passenger on Stage B</a><a href = "#map"></a></li>');
$fob = $('	<li data-icon = "navigation"><a href = "">12:30 PM - Fall Out Boy on Stage A</a><a href = "#map"></a></li>');
$allofit = $('<ul data-role = "listview" id = "all"><li data-icon = "navigation"><a href = "#">11:00 AM - Taylor Swift on Stage A <a href = "#map"></a></a></li><li data-icon = "navigation"><a href = "#">12:00 PM - Passenger on Stage B</a><a href = "#map"></a></li><li data-icon = "navigation"><a href = "#">12:30 PM - Fall Out Boy on Stage A</a><a href = "#map"></a></li></ul>');
$(document).ready(function(){
	$("#all").append($tswizzle);
	$("#all").append($passenger);
	$("#all").append($fob);
	/*$("#all li").on("tap", function(){
		$("#mine").append($tswizzle);
	}); */
});