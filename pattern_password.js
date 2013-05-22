var prevNodeCode;
var prevNode;
var dataString; 
$(document).ready(function(){
	initialize();
});	
var initialize = function(){
	var container = $('.gesture_password_container');
	var tableString = '<table class = "gesture_password_table">';
		tableString += '<tr>';	
			tableString += '<td><div class = "node untouched_node"onclick = "startOrStop(this, \'00\')" onmouseover = "addNode(this, \'00\')"></div><div class = "link n"></div><div class = "link ne"></div><div class = "link e"></div><div class = "link se"></div><div class = "link s"></div><div class = "link sw"></div><div class = "link w"></div><div class = "link nw"></div></td>';
			tableString += '<td><div class = "node untouched_node"onclick = "startOrStop(this, \'01\')" onmouseover = "addNode(this, \'01\')"></div><div class = "link n"></div><div class = "link ne"></div><div class = "link e"></div><div class = "link se"></div><div class = "link s"></div><div class = "link sw"></div><div class = "link w"></div><div class = "link nw"></div></td>';
			tableString += '<td><div class = "node untouched_node"onclick = "startOrStop(this, \'02\')" onmouseover = "addNode(this, \'02\')"></div><div class = "link n"></div><div class = "link ne"></div><div class = "link e"></div><div class = "link se"></div><div class = "link s"></div><div class = "link sw"></div><div class = "link w"></div><div class = "link nw"></div></td>';
		tableString += '</tr>';
		tableString += '<tr>';
			tableString += '<td><div class = "node untouched_node"onclick = "startOrStop(this, \'10\')" onmouseover = "addNode(this, \'10\')"></div><div class = "link n"></div><div class = "link ne"></div><div class = "link e"></div><div class = "link se"></div><div class = "link s"></div><div class = "link sw"></div><div class = "link w"></div><div class = "link nw"></div></td>';
			tableString += '<td><div class = "node untouched_node"onclick = "startOrStop(this, \'11\')" onmouseover = "addNode(this, \'11\')"></div><div class = "link n"></div><div class = "link ne"></div><div class = "link e"></div><div class = "link se"></div><div class = "link s"></div><div class = "link sw"></div><div class = "link w"></div><div class = "link nw"></div></td>';
			tableString += '<td><div class = "node untouched_node"onclick = "startOrStop(this, \'12\')" onmouseover = "addNode(this, \'12\')"></div><div class = "link n"></div><div class = "link ne"></div><div class = "link e"></div><div class = "link se"></div><div class = "link s"></div><div class = "link sw"></div><div class = "link w"></div><div class = "link nw"></div></td>';
		tableString += '</tr>';
		tableString += '<tr>';
			tableString += '<td><div class = "node untouched_node"onclick = "startOrStop(this, \'20\')" onmouseover = "addNode(this, \'20\')"></div><div class = "link n"></div><div class = "link ne"></div><div class = "link e"></div><div class = "link se"></div><div class = "link s"></div><div class = "link sw"></div><div class = "link w"></div><div class = "link nw"></div></td>';
			tableString += '<td><div class = "node untouched_node"onclick = "startOrStop(this, \'21\')" onmouseover = "addNode(this, \'21\')"></div><div class = "link n"></div><div class = "link ne"></div><div class = "link e"></div><div class = "link se"></div><div class = "link s"></div><div class = "link sw"></div><div class = "link w"></div><div class = "link nw"></div></td>';
			tableString += '<td><div class = "node untouched_node"onclick = "startOrStop(this, \'22\')" onmouseover = "addNode(this, \'22\')"></div><div class = "link n"></div><div class = "link ne"></div><div class = "link e"></div><div class = "link se"></div><div class = "link s"></div><div class = "link sw"></div><div class = "link w"></div><div class = "link nw"></div></td>';
		tableString += '</tr>';
	tableString += '</table>';
	container.html(tableString);
	$('.link').html('>>>>');
	prevNodeCode = "";
	prevNode = undefined;
	dataString = "";	
}
var startOrStop = function(node, code){
	if(prevNodeCode == ""){
		dataString = code;
		prevNodeCode = code;
		prevNode = node;
		$(prevNode).addClass('touched_node');
	}else{
		$(prevNode).addClass('touched$(prevNode)_node');
		alert("Password String: " + dataString);
		initialize();
	}
};
var addNode = function(node, code){
	if(prevNodeCode != ""){
		dataString += "," + code;
		displayLink(node, code);
		prevNodeCode = code;
		prevNode = node;
		$('#password').val(dataString);
		$(prevNode).addClass('touched_node');
	}
};

var displayLink = function(node, code){
	styleString = "";
	if(parseInt(prevNodeCode.split('')[0]) > parseInt(code.split('')[0]))
		styleString += 'n';
	else if(parseInt(prevNodeCode.split('')[0]) < parseInt(code.split('')[0]))
		styleString += 's';

	if(parseInt(prevNodeCode.split('')[1]) > parseInt(code.split('')[1]))
		styleString += 'w';
	else if(parseInt(prevNodeCode.split('')[1]) < parseInt(code.split('')[1]))
		styleString += 'e';
	$(prevNode.parentNode).children('.' + styleString ).show();
	// alert(styleString);
}