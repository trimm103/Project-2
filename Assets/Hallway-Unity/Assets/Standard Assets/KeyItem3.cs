using UnityEngine;
using System.Collections;

public class KeyItem3 : MonoBehaviour {
	void OnTriggerEnter(Collider collider) {
		if(collider.gameObject.name == "Player") {
			GameVariables.keyCount3+=1; 
			Destroy (gameObject);
		}
	}
}