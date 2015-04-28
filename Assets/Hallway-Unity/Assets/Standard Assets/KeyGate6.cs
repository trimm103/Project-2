using UnityEngine;
using System.Collections;

public class KeyGate6 : MonoBehaviour {
	
	void OnTriggerEnter(Collider collider) {
		if(collider.gameObject.name == "Player" && GameVariables.keyCount6>0) {
			GameVariables.keyCount6--;
			Destroy (gameObject);
		}
	}
}
