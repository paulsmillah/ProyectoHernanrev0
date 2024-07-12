var APP_DATA = {
  "scenes": [
    {
      "id": "0-acceso-ext",
      "name": "ACCESO EXT",
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
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "yaw": 0.3477232894357929,
        "pitch": 0.013117983227099117,
        "fov": 1.3474042771833745
      },
      "linkHotspots": [
        {
          "yaw": 0.18213714977890305,
          "pitch": 0.35877637986754785,
          "rotation": 0,
          "target": "1-entrada"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-entrada",
      "name": "ENTRADA",
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
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "yaw": 0.26711478462777194,
        "pitch": -0.0005107087681430755,
        "fov": 1.3474042771833745
      },
      "linkHotspots": [
        {
          "yaw": 0.13821193713498303,
          "pitch": 0.42675986023387935,
          "rotation": 0,
          "target": "2-cocina-1"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -1.8173424690451476,
          "pitch": 0.1840943039559626,
          "title": "Oficina - Estudio",
          "text": ""
        }
      ]
    },
    {
      "id": "2-cocina-1",
      "name": "COCINA 1",
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
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.48676931003000057,
          "pitch": 0.15651787353565005,
          "rotation": 0,
          "target": "3-cocina-2"
        },
        {
          "yaw": 0.13380340762067355,
          "pitch": 0.16354044743949814,
          "rotation": 0,
          "target": "4-estar-comedor"
        },
        {
          "yaw": 1.822539119318237,
          "pitch": 0.39494681003967713,
          "rotation": 0,
          "target": "5-paso"
        },
        {
          "yaw": -2.9438195356053747,
          "pitch": 0.4158710499260696,
          "rotation": 0,
          "target": "1-entrada"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 0.3370417035128721,
          "pitch": -0.084621101424732,
          "title": "Ventana Claraboya",
          "text": "Text"
        }
      ]
    },
    {
      "id": "3-cocina-2",
      "name": "COCINA 2",
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
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.8292228174296596,
          "pitch": 0.3452288781528594,
          "rotation": 0,
          "target": "2-cocina-1"
        },
        {
          "yaw": -1.084121151063032,
          "pitch": 0.23479295470634476,
          "rotation": 0,
          "target": "4-estar-comedor"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "4-estar-comedor",
      "name": "ESTAR COMEDOR",
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
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 1.504745259214963,
          "pitch": 0.2463260975606154,
          "rotation": 0,
          "target": "3-cocina-2"
        },
        {
          "yaw": 0.9391124928728125,
          "pitch": 0.20292308621335842,
          "rotation": 0,
          "target": "2-cocina-1"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "5-paso",
      "name": "PASO",
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
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.24049082186953186,
          "pitch": 0.4417786075173442,
          "rotation": 0,
          "target": "6-bao"
        },
        {
          "yaw": 1.8085732919785817,
          "pitch": 0.40622541706990667,
          "rotation": 0,
          "target": "9-dormitorio-principal"
        },
        {
          "yaw": -2.7935697172309144,
          "pitch": 0.5161665872445766,
          "rotation": 0,
          "target": "8-dormitorio-2"
        },
        {
          "yaw": -1.4020272631758548,
          "pitch": 0.5464704644290279,
          "rotation": 0,
          "target": "7-dormitorio-1"
        },
        {
          "yaw": -0.1210569434962423,
          "pitch": 0.3903738399448873,
          "rotation": 0,
          "target": "2-cocina-1"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "6-bao",
      "name": "BAÑO",
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
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 1.7576685634222615,
          "pitch": 0.4728177566463252,
          "rotation": 0,
          "target": "5-paso"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "7-dormitorio-1",
      "name": "DORMITORIO 1",
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
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 2.3526886501714683,
          "pitch": 0.6562245414138985,
          "rotation": 0,
          "target": "5-paso"
        },
        {
          "yaw": 2.7017764870886953,
          "pitch": 0.1773381587730949,
          "rotation": 0,
          "target": "9-dormitorio-principal"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "8-dormitorio-2",
      "name": "DORMITORIO 2",
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
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -2.2528261728461487,
          "pitch": 0.6148561322092547,
          "rotation": 0,
          "target": "5-paso"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "9-dormitorio-principal",
      "name": "DORMITORIO PRINCIPAL",
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
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.7375244938131278,
          "pitch": 0.32437590639892555,
          "rotation": 0,
          "target": "5-paso"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 2.1848810760305515,
          "pitch": 0.08809819456365986,
          "title": "Baño intimo",
          "text": ""
        }
      ]
    }
  ],
  "name": "Project Title",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": true,
    "fullscreenButton": false,
    "viewControlButtons": false
  }
};
