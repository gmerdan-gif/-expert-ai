# Stage 6 TEST — Summary

**Overall:** PASS
**Generated:** 2026-08-27T14:29:41.489Z
**Production modified by tests:** no (runner is read-only)

## Results

| # | Test | Result |
|---|------|--------|
| 1 | 1.DATASET_INTEGRITY | **PASS** |
| 2 | 2.P0_LOOKUP | **PASS** |
| 3 | 3.P2_RELATIONS | **PASS** |
| 4 | 4.GLOBAL_RELATED_INTEGRITY | **PASS** |
| 5 | 5.REGRESSION_LOOKUP_RELATED_PAGE | **PASS** |

## Details

### 1.DATASET_INTEGRITY — PASS

```json
{
  "entryCount": 1674,
  "exportCount": 1674,
  "allCount": 1674,
  "uniqueSlugCount": 1674,
  "duplicateSlugCount": 0,
  "duplicateSlugKeys": [],
  "batchSum": 1674,
  "expected": {
    "entries": 1674,
    "unique": 1674,
    "duplicates": 0,
    "batchSum": 1674
  },
  "emptyBatches": [
    "Q",
    "S"
  ]
}
```

### 2.P0_LOOKUP — PASS

```json
{
  "sinava_gec_kalmak": {
    "exists": true,
    "hits": 1,
    "inBatchO": false,
    "inBatchAS": true,
    "isGenericAtmosphereTemplate": false,
    "isASSpecific": true,
    "shortStart": "Rüyada sınava geç kalmak değerlendirilme kaygısı, hazırlıksızlık ve önemli bir fırsatı kaçırma korku",
    "title": "Sınava Geç Kalmak"
  },
  "okula_gec_kalmak": {
    "exists": true,
    "hits": 1,
    "inBatchO": false,
    "inBatchAS": true,
    "isGenericAtmosphereTemplate": false,
    "isASSpecific": true,
    "shortStart": "Rüyada okula geç kalmak zaman baskısı, hazırlıksızlık, kaçırılmış fırsatlar veya kişinin kendisinden",
    "title": "Okula Geç Kalmak"
  }
}
```

### 3.P2_RELATIONS — PASS

```json
{
  "mutfak": {
    "relatedSlugs": [
      "yemek_yapmak",
      "mutfakta_yemek_yapmak"
    ],
    "expected": [
      "yemek_yapmak",
      "mutfakta_yemek_yapmak"
    ],
    "matchExpected": true,
    "dangling": [],
    "eachResolves": true,
    "getRelatedDreamSymbols": [
      "yemek_yapmak",
      "mutfakta_yemek_yapmak"
    ]
  },
  "okulda_olmak": {
    "relatedSlugs": [
      "mezun_olmak",
      "sinavdan_kalmak"
    ],
    "expected": [
      "mezun_olmak",
      "sinavdan_kalmak"
    ],
    "matchExpected": true,
    "dangling": [],
    "eachResolves": true,
    "getRelatedDreamSymbols": [
      "mezun_olmak",
      "sinavdan_kalmak"
    ]
  },
  "okula_gec_kalmak": {
    "relatedSlugs": [
      "okulda_olmak",
      "sinava_girmek"
    ],
    "expected": [
      "okulda_olmak",
      "sinava_girmek"
    ],
    "matchExpected": true,
    "dangling": [],
    "eachResolves": true,
    "getRelatedDreamSymbols": [
      "okulda_olmak",
      "sinava_girmek"
    ]
  },
  "sinava_gec_kalmak": {
    "relatedSlugs": [
      "sinavdan_kalmak",
      "sinav_sonucunu_gormek"
    ],
    "expected": [
      "sinavdan_kalmak",
      "sinav_sonucunu_gormek"
    ],
    "matchExpected": true,
    "dangling": [],
    "eachResolves": true,
    "getRelatedDreamSymbols": [
      "sinavdan_kalmak",
      "sinav_sonucunu_gormek"
    ]
  },
  "sinifta_tek_basina_kalmak": {
    "relatedSlugs": [
      "sinifta_olmak",
      "okulda_olmak"
    ],
    "expected": [
      "sinifta_olmak",
      "okulda_olmak"
    ],
    "matchExpected": true,
    "dangling": [],
    "eachResolves": true,
    "getRelatedDreamSymbols": [
      "sinifta_olmak",
      "okulda_olmak"
    ]
  }
}
```

### 4.GLOBAL_RELATED_INTEGRITY — PASS

```json
{
  "danglingEdgeCount": 0,
  "danglingSamples": [],
  "selfReferenceCount": 0,
  "selfRefSamples": [],
  "symbolsWithDuplicateRelatedEntries": 0,
  "dupRelatedSamples": []
}
```

### 5.REGRESSION_LOOKUP_RELATED_PAGE — PASS

```json
{
  "staticParamsCount": 1674,
  "staticParamsUnique": 1674,
  "p0ParamCounts": {
    "sinava_gec_kalmak": 1,
    "okula_gec_kalmak": 1
  },
  "p0PageDataSmoke": [
    {
      "title": "Sınava Geç Kalmak",
      "description": "Rüyada sınava geç kalmak değerlendirilme kaygısı, hazırlıksızlık ve önemli bir fırsatı kaçırma korkusuyla ilişkili olabilir.",
      "relatedCount": 2,
      "relatedAllDefined": true
    },
    {
      "title": "Okula Geç Kalmak",
      "description": "Rüyada okula geç kalmak zaman baskısı, hazırlıksızlık, kaçırılmış fırsatlar veya kişinin kendisinden beklentileriyle ilişkili olabilir.",
      "relatedCount": 2,
      "relatedAllDefined": true
    }
  ],
  "importOk": true
}
```


## Package scripts

No `test` script in package.json. Used dedicated Stage 6 runner.

## Stop gate

TEST complete. Do not RE-AUDIT or RELEASE in this step.
