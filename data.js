var APP_DATA = {
  "scenes": [
    {
      "id": "0-fachada-exterior",
      "name": "Fachada exterior",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": 0.06945028821868249,
        "pitch": -0.3953381152861759,
        "fov": 1.2752188746020257
      },
      "linkHotspots": [
        {
          "yaw": 0.01441367902404167,
          "pitch": -0.15809762796828153,
          "rotation": 0,
          "target": "1-acceso-escaleras"
        },
        {
          "yaw": 0.6518504303838828,
          "pitch": -0.06184641522475687,
          "rotation": 0,
          "target": "5-acceso-veichulos-"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-acceso-escaleras",
      "name": "acceso escaleras",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": 0.008610877732699862,
        "pitch": -0.02902832315039916,
        "fov": 1.2752188746020257
      },
      "linkHotspots": [
        {
          "yaw": -0.012099552648399126,
          "pitch": -0.16945357335626277,
          "rotation": 0,
          "target": "2-hall-central"
        },
        {
          "yaw": -3.0601814326784886,
          "pitch": 0.09586227119463686,
          "rotation": 0,
          "target": "0-fachada-exterior"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-hall-central",
      "name": "hall central",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.27831394325616365,
          "pitch": 0.04245919801726927,
          "rotation": 0,
          "target": "3-ascensor-cocheras"
        },
        {
          "yaw": 3.109535585696018,
          "pitch": 0.17576032834269384,
          "rotation": 0,
          "target": "1-acceso-escaleras"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "3-ascensor-cocheras",
      "name": "ascensor/ cocheras",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.22584227995422523,
          "pitch": 0.01435332716065929,
          "rotation": 0,
          "target": "4-cocheras-descubiertas"
        },
        {
          "yaw": -1.7579937114292221,
          "pitch": 0.1406825478637188,
          "rotation": 0,
          "target": "7-palier"
        },
        {
          "yaw": 2.7850346360287705,
          "pitch": 0.05707424563486363,
          "rotation": 0,
          "target": "2-hall-central"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "4-cocheras-descubiertas",
      "name": "cocheras descubiertas",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -3.041424322996356,
          "pitch": 0.03477807256583887,
          "rotation": 0,
          "target": "3-ascensor-cocheras"
        },
        {
          "yaw": -1.3036400850034333,
          "pitch": 0.0761486571711707,
          "rotation": 0,
          "target": "6-vista-cocheras-descubiretas"
        },
        {
          "yaw": 1.7148332249058438,
          "pitch": 0.10616743668712303,
          "rotation": 1.5707963267948966,
          "target": "5-acceso-veichulos-"
        },
        {
          "yaw": 0.21763311214365189,
          "pitch": 0.1264377793531004,
          "rotation": 0,
          "target": "8-cocheras-descubiertas"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "5-acceso-veichulos-",
      "name": "acceso veichulos ",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": -0.5218178273819731,
        "pitch": -0.10390296619701012,
        "fov": 1.2752188746020257
      },
      "linkHotspots": [
        {
          "yaw": 3.1357048354911274,
          "pitch": 0.12758164747296696,
          "rotation": 0,
          "target": "0-fachada-exterior"
        },
        {
          "yaw": -0.4280717638308609,
          "pitch": -0.027344446397515654,
          "rotation": 0,
          "target": "8-cocheras-descubiertas"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "6-vista-cocheras-descubiretas",
      "name": "vista cocheras descubiretas",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": -2.14772171900281,
        "pitch": 0.07858989373579917,
        "fov": 1.2752188746020257
      },
      "linkHotspots": [
        {
          "yaw": -1.1995322799090147,
          "pitch": 0.03727523261241927,
          "rotation": 1.5707963267948966,
          "target": "3-ascensor-cocheras"
        },
        {
          "yaw": -2.470461997551748,
          "pitch": 0.09411547896680794,
          "rotation": 0,
          "target": "8-cocheras-descubiertas"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "7-palier",
      "name": "palier",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": -0.8726709068927345,
        "pitch": 0.05322752990768187,
        "fov": 1.2752188746020257
      },
      "linkHotspots": [
        {
          "yaw": -0.042707282455634044,
          "pitch": 0.019990333866150678,
          "rotation": 3.141592653589793,
          "target": "3-ascensor-cocheras"
        },
        {
          "yaw": 1.3418696020299485,
          "pitch": 0.037794262260762324,
          "rotation": 0,
          "target": "9-ingreso-al-dpto"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "8-cocheras-descubiertas",
      "name": "cocheras descubiertas",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": 1.7172309959700858,
        "pitch": 0.40851148319419117,
        "fov": 1.2752188746020257
      },
      "linkHotspots": [
        {
          "yaw": -2.7140849278089156,
          "pitch": 0.013314623479281806,
          "rotation": 0,
          "target": "4-cocheras-descubiertas"
        },
        {
          "yaw": 2.6030445202446195,
          "pitch": 0.051570673129575084,
          "rotation": 0,
          "target": "5-acceso-veichulos-"
        },
        {
          "yaw": -2.2340370626360393,
          "pitch": 0.027637799012593334,
          "rotation": 0,
          "target": "6-vista-cocheras-descubiretas"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "9-ingreso-al-dpto",
      "name": "ingreso al dpto",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": -0.6049306530029561,
        "pitch": 0.19613332837155895,
        "fov": 1.2752188746020257
      },
      "linkHotspots": [
        {
          "yaw": -0.26949211555028896,
          "pitch": 0.06624331600028377,
          "rotation": 0,
          "target": "10-living-comedor-i"
        },
        {
          "yaw": 0.08595065691765313,
          "pitch": -0.27608181720772684,
          "rotation": 0,
          "target": "13-acceso-pa"
        },
        {
          "yaw": -2.9162101531166744,
          "pitch": 0.1102139442467589,
          "rotation": 0,
          "target": "12-cocina"
        },
        {
          "yaw": 2.35387030543811,
          "pitch": 0.08763210363049012,
          "rotation": 0,
          "target": "7-palier"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "10-living-comedor-i",
      "name": "living comedor I",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": 0.36509438434575614,
        "pitch": 0.2559560874609268,
        "fov": 1.2752188746020257
      },
      "linkHotspots": [
        {
          "yaw": 2.8815078398173117,
          "pitch": 0.22151138902999534,
          "rotation": 0,
          "target": "9-ingreso-al-dpto"
        },
        {
          "yaw": 0.06697325212944882,
          "pitch": 0.07609376945757873,
          "rotation": 0,
          "target": "11-living-comedor-ii"
        },
        {
          "yaw": 0.7629617025088535,
          "pitch": 0.15204402328999578,
          "rotation": 0,
          "target": "15-bao-de-abajo"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "11-living-comedor-ii",
      "name": "living comedor II",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": 2.6787440163042273,
        "pitch": 0.16979265207805483,
        "fov": 1.2752188746020257
      },
      "linkHotspots": [
        {
          "yaw": 3.024823977583539,
          "pitch": 0.12070663884957611,
          "rotation": 0,
          "target": "10-living-comedor-i"
        },
        {
          "yaw": 2.197830202405777,
          "pitch": 0.12138845364506956,
          "rotation": 0,
          "target": "15-bao-de-abajo"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "12-cocina",
      "name": "cocina",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": -1.499779157624765,
        "pitch": -0.10555167015114009,
        "fov": 1.2752188746020257
      },
      "linkHotspots": [
        {
          "yaw": 2.52127029308679,
          "pitch": 0.23874152405958426,
          "rotation": 0,
          "target": "9-ingreso-al-dpto"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "13-acceso-pa",
      "name": "acceso PA",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": 0.027639624893144088,
        "pitch": 0.12924515307433282,
        "fov": 1.2752188746020257
      },
      "linkHotspots": [
        {
          "yaw": 1.8793950576985665,
          "pitch": 0.12611017639551747,
          "rotation": 0,
          "target": "14-habitacin"
        },
        {
          "yaw": 2.088236567818309,
          "pitch": 0.11561277556143423,
          "rotation": 0.7853981633974483,
          "target": "17-bao-de-arriba"
        },
        {
          "yaw": -1.5473647079075796,
          "pitch": 0.1793461516684811,
          "rotation": 0,
          "target": "16-habitacion-matrimonial"
        },
        {
          "yaw": -2.9799646605091965,
          "pitch": 0.17272590658747333,
          "rotation": 3.141592653589793,
          "target": "9-ingreso-al-dpto"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "14-habitacin",
      "name": "habitación",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -2.390396269987857,
          "pitch": 0.11373720495794615,
          "rotation": 0,
          "target": "13-acceso-pa"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "15-bao-de-abajo",
      "name": "baño de abajo",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": -0.007017038186432956,
        "pitch": -0.003060100396265142,
        "fov": 1.2752188746020257
      },
      "linkHotspots": [
        {
          "yaw": -3.127527294621176,
          "pitch": 0.25440892520907354,
          "rotation": 0,
          "target": "11-living-comedor-ii"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "16-habitacion-matrimonial",
      "name": "habitacion matrimonial",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": 0.05520939470594044,
        "pitch": 0.2432849940222681,
        "fov": 1.2752188746020257
      },
      "linkHotspots": [
        {
          "yaw": 2.678095583277603,
          "pitch": 0.16073566941337347,
          "rotation": 0,
          "target": "13-acceso-pa"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "17-bao-de-arriba",
      "name": "baño de arriba",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -3.1387677177264415,
          "pitch": 0.33870295942730166,
          "rotation": 0,
          "target": "13-acceso-pa"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "FiorenzaDuplexContraFrente",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": true,
    "fullscreenButton": true,
    "viewControlButtons": true
  }
};
