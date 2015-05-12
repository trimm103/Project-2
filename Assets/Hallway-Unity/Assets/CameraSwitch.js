#pragma strict

var camera1 : Camera;
var camera2 : Camera;

function Start () {

}

function Update () {

}


function OnTriggerEnter (other : Collider) {

	GameObject.Find("Player").GetComponent(CharacterMotor).enabled = false;
	GameObject.Find("Player").GetComponent(MouseLook).enabled = false;

	camera1.camera.enabled = false;
	camera2.camera.enabled = true;
}