using UnityEngine;
using System.Collections;

public class KeyGate3 : MonoBehaviour {
	
	void OnTriggerEnter(Collider collider) {
		if(collider.gameObject.name == "Player" && GameVariables.keyCount3>0) {
			GameVariables.keyCount3--;
			Destroy (gameObject);
		}
	}
}
