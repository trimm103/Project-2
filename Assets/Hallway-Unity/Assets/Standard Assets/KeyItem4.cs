using UnityEngine;
using System.Collections;

public class KeyItem4 : MonoBehaviour {
	void OnTriggerEnter(Collider collider) {
		if(collider.gameObject.name == "Player") {
			GameVariables.keyCount4+=1; 
			Destroy (gameObject);
		}
	}
}