using UnityEngine;
using System.Collections;

public class KeyGate5 : MonoBehaviour {
	
	void OnTriggerEnter(Collider collider) {
		if(collider.gameObject.name == "Player" && GameVariables.keyCount5>0) {
			GameVariables.keyCount5--;
			Destroy (gameObject);
		}
	}
}
