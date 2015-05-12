#pragma strict

var camera1 : Camera;
var camera2 : Camera;

var cameraAnim : Animator;

var sound1 : AudioClip;
var sound2 : AudioClip;

var player : GameObject;

function Start () {
	player = GameObject.Find("Player");
	cameraAnim = GameObject.Find("CinematicCamera").GetComponent("Animator");
	cameraAnim.enabled = false;
}

function Update () {

}


function OnTriggerEnter (other : Collider) {

	GameObject.Find("Player").GetComponent(CharacterMotor).enabled = false;
	GameObject.Find("Player").GetComponent(MouseLook).enabled = false;
	yield WaitForSeconds (1.5);

	camera1.camera.enabled = false;
	camera2.camera.enabled = true;
	player.transform.position = Vector3(345,5,86);
	cameraAnim.enabled = true;
	audio.PlayOneShot(sound1);
	yield WaitForSeconds (2.9);
	cameraAnim.enabled = false;
	audio.PlayOneShot(sound2);
	

}