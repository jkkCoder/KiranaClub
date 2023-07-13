const mockData = {
    "stores": {
      "ac533b7d-52fa-406f-9491-47c4502f67b9": {
        "type": "General Store",
        "name": "U1_HARE KIRANA AND GENERAL",
        "route": "r4",
        "area": "Koramangla",
        "address": "RADHA KISHAN HARE KIRANA AND GENERAL Ramghat Road, Vishnupuri, Near water tank, sector 5C, Agra, UP"
      },
      "aff12345-1f23-42ee-9986-a0086ee35b47": {
        "type": "General Store",
        "name": "U2_HARE KIRANA AND GENERAL",
        "route": "r6",
        "area": "HSR",
        "address": "RADHA KISHAN HARE KIRANA AND GENERAL Ramghat Road, Vishnupuri, Near water tank, sector 5C, Agra, UP"
      },
      "d596bacc-4c96-485f-a143-d1a493124c39": {
        "type": "General Store",
        "name": "U1_SANJAY TRADERS",
        "route": "r6",
        "area": "MG Road",
        "address": "AGARWAL SANJAY TRADERS Ramghat Road, Vishnupuri, Near water tank, sector 5C, Agra, UP"
      },
      "1075f393-c356-426c-8b2c-daabf9639bbd": {
        "type": "General Store",
        "name": "U2_SANJAY TRADERS",
        "route": "r6",
        "area": "HSR",
        "address": "AGARWAL SANJAY TRADERS Ramghat Road, Vishnupuri, Near water tank, sector 5C, Agra, UP"
      },
      "4492786f-b73c-4a56-9955-8477b6d1f550": {
        "type": "General Store",
        "name": "U1_HIMANSHU PROVISION",
        "route": "r3",
        "area": "Koramangla",
        "address": "SHAYAS MISHRA HIMANSHU PROVISION Ramghat Road, Vishnupuri, Near water tank, sector 5C, Agra, UP"
      },
      "7a8f63bb-e1c3-4c30-b4cf-28812241647a": {
        "type": "General Store",
        "name": "U2_HIMANSHU PROVISION",
        "route": "r6",
        "area": "MG Road",
        "address": "SHAYAS MISHRA HIMANSHU PROVISION Ramghat Road, Vishnupuri, Near water tank, sector 5C, Agra, UP"
      },
      "7b732a57-3ea5-41ca-8354-301821dad093": {
        "type": "General Store",
        "name": "U1_VIDHYA SAGAR KIRANA",
        "route": "r4",
        "area": "MG Road",
        "address": "SAMRAT VIDHYA SAGAR KIRANA Ramghat Road, Vishnupuri, Near water tank, sector 5C, Agra, UP"
      },
      "ba0d79ac-533c-4355-983e-1e3480c878a9": {
        "type": "General Store",
        "name": "U2_VIDHYA SAGAR KIRANA",
        "route": "r6",
        "area": "Koramangla",
        "address": "SAMRAT VIDHYA SAGAR KIRANA Ramghat Road, Vishnupuri, Near water tank, sector 5C, Agra, UP"
      },
      "578fda8d-70d9-4c79-9514-3208b2bef883": {
        "type": "General Store",
        "name": "U1_DEEPAK PROVISION",
        "route": "r3",
        "area": "MG Road",
        "address": "AMIT JAIN DEEPAK PROVISION Ramghat Road, Vishnupuri, Near water tank, sector 5C, Agra, UP"
      },
      "45945643-e9f1-4173-93db-b94664365967": {
        "type": "General Store",
        "name": "U2_DEEPAK PROVISION",
        "route": "r4",
        "area": "HSR",
        "address": "AMIT JAIN DEEPAK PROVISION Ramghat Road, Vishnupuri, Near water tank, sector 5C, Agra, UP"
      },
      "e0ff8552-e0b4-4630-8926-84513eeeae38": {
        "type": "General Store",
        "name": "U1_NITIN KIRANA",
        "route": "r3",
        "area": "Koramangla",
        "address": "RAVI NITIN KIRANA Ramghat Road, Vishnupuri, Near water tank, sector 5C, Agra, UP"
      },
      "fcdae23a-f53f-49c0-898a-02e73c10e8bc": {
        "type": "General Store",
        "name": "U2_NITIN KIRANA",
        "route": "r3",
        "area": "MG Road",
        "address": "RAVI NITIN KIRANA Ramghat Road, Vishnupuri, Near water tank, sector 5C, Agra, UP"
      },
      "50316c1d-c0fb-4257-ae2f-0bec31440eb0": {
        "type": "General Store",
        "name": "U1_NAGPAL PROVISION",
        "route": "r4",
        "area": "Koramangla",
        "address": "RAJESH KOTWANI NAGPAL PROVISION Ramghat Road, Vishnupuri, Near water tank, sector 5C, Agra, UP"
      },
      "fe928f55-2ab1-4369-87f4-d7e29d0daebb": {
        "type": "General Store",
        "name": "U2_NAGPAL PROVISION",
        "route": "r3",
        "area": "MG Road",
        "address": "RAJESH KOTWANI NAGPAL PROVISION Ramghat Road, Vishnupuri, Near water tank, sector 5C, Agra, UP"
      },
      "786912e4-9c02-46a8-84bb-74503caaaa5f": {
        "type": "General Store",
        "name": "U1_KANCHAN KIRANA AND GENERAL",
        "route": "r6",
        "area": "HSR",
        "address": "KESHARWANI KANCHAN KIRANA AND GENERAL Ramghat Road, Vishnupuri, Near water tank, sector 5C, Agra, UP"
      },
      "7da834b7-0c84-450b-b8ba-7fc17aee25d8": {
        "type": "General Store",
        "name": "U2_KANCHAN KIRANA AND GENERAL",
        "route": "r2",
        "area": "HSR",
        "address": "KESHARWANI KANCHAN KIRANA AND GENERAL Ramghat Road, Vishnupuri, Near water tank, sector 5C, Agra, UP"
      },
      "fe766f3e-dac5-488c-b30f-909bbe459c04": {
        "type": "General Store",
        "name": "U1_S.D. PROVISION",
        "route": "r1",
        "area": "HSR",
        "address": "DINESH JAIN S.D. PROVISION Ramghat Road, Vishnupuri, Near water tank, sector 5C, Agra, UP"
      },
      "9ad9bad6-e268-4dbb-979b-c97c111f8922": {
        "type": "General Store",
        "name": "U2_S.D. PROVISION",
        "route": "r3",
        "area": "HSR",
        "address": "DINESH JAIN S.D. PROVISION Ramghat Road, Vishnupuri, Near water tank, sector 5C, Agra, UP"
      },
      "6f45944c-8f70-45fa-ab13-f471c50c5dcf": {
        "type": "General Store",
        "name": "U1_KGN KIRANA",
        "route": "r6",
        "area": "MG Road",
        "address": "SANJAY JAIN KGN KIRANA Ramghat Road, Vishnupuri, Near water tank, sector 5C, Agra, UP"
      },
      "e503ccc2-5794-4b10-8d41-ca169b249e57": {
        "type": "General Store",
        "name": "U2_KGN KIRANA",
        "route": "r4",
        "area": "MG Road",
        "address": "SANJAY JAIN KGN KIRANA Ramghat Road, Vishnupuri, Near water tank, sector 5C, Agra, UP"
      },
      "581371a1-248c-4079-b734-ace6519b172b": {
        "type": "General Store",
        "name": "U1_SAINI KIRANA",
        "route": "r2",
        "area": "MG Road",
        "address": "MR HIMANSHU AHUJA SAINI KIRANA Ramghat Road, Vishnupuri, Near water tank, sector 5C, Agra, UP"
      },
      "0cc80d9d-14b4-4d0d-9d88-c02fb59106bf": {
        "type": "General Store",
        "name": "U2_SAINI KIRANA",
        "route": "r6",
        "area": "MG Road",
        "address": "MR HIMANSHU AHUJA SAINI KIRANA Ramghat Road, Vishnupuri, Near water tank, sector 5C, Agra, UP"
      },
      "8171e277-241d-4e20-b0ee-e66f0a74191d": {
        "type": "General Store",
        "name": "U1_KALLU MAMA KIRANA",
        "route": "r5",
        "area": "Koramangla",
        "address": "VIKASH JAIN KALLU MAMA KIRANA Ramghat Road, Vishnupuri, Near water tank, sector 5C, Agra, UP"
      },
      "e3d495b4-6ea9-469d-ab51-319e6140a697": {
        "type": "General Store",
        "name": "U2_KALLU MAMA KIRANA",
        "route": "r2",
        "area": "MG Road",
        "address": "VIKASH JAIN KALLU MAMA KIRANA Ramghat Road, Vishnupuri, Near water tank, sector 5C, Agra, UP"
      },
      "6fa13a70-d034-4e45-ba9e-c57208e4e3a1": {
        "type": "General Store",
        "name": "U1_PRAKASH KIRANA",
        "route": "r3",
        "area": "Koramangla",
        "address": "SANJAY JAIN PRAKASH KIRANA Ramghat Road, Vishnupuri, Near water tank, sector 5C, Agra, UP"
      },
      "d3af5475-3b64-4001-8672-5e4da802f913": {
        "type": "General Store",
        "name": "U2_PRAKASH KIRANA",
        "route": "r5",
        "area": "Koramangla",
        "address": "SANJAY JAIN PRAKASH KIRANA Ramghat Road, Vishnupuri, Near water tank, sector 5C, Agra, UP"
      },
      "dc9efefc-7712-44a2-a693-8bdc40808260": {
        "type": "General Store",
        "name": "U1_BIG SHOP",
        "route": "r1",
        "area": "Koramangla",
        "address": "RAKESH BIG SHOP Ramghat Road, Vishnupuri, Near water tank, sector 5C, Agra, UP"
      },
      "135801d8-1ab3-4c51-95b3-85c88a8aa927": {
        "type": "General Store",
        "name": "U2_BIG SHOP",
        "route": "r3",
        "area": "Koramangla",
        "address": "RAKESH BIG SHOP Ramghat Road, Vishnupuri, Near water tank, sector 5C, Agra, UP"
      },
      "d90272b8-da96-4177-8620-26befc7e96b8": {
        "type": "General Store",
        "name": "U1_SANYAM PROVISION",
        "route": "r6",
        "area": "MG Road",
        "address": "WASHIM KHAN SANYAM PROVISION Ramghat Road, Vishnupuri, Near water tank, sector 5C, Agra, UP"
      },
      "60a6684e-5b34-4902-aa66-6db258c73fbd": {
        "type": "General Store",
        "name": "U2_SANYAM PROVISION",
        "route": "r2",
        "area": "HSR",
        "address": "WASHIM KHAN SANYAM PROVISION Ramghat Road, Vishnupuri, Near water tank, sector 5C, Agra, UP"
      },
      "94295098-285a-4c2b-98f0-85164f0908d2": {
        "type": "General Store",
        "name": "U1_SHREE RAM KIRANA",
        "route": "r2",
        "area": "Koramangla",
        "address": "NEERAJ SAINI SHREE RAM KIRANA Ramghat Road, Vishnupuri, Near water tank, sector 5C, Agra, UP"
      },
      "3be1c199-cb89-435f-aaa5-c67fa2c14710": {
        "type": "General Store",
        "name": "U2_SHREE RAM KIRANA",
        "route": "r3",
        "area": "Koramangla",
        "address": "NEERAJ SAINI SHREE RAM KIRANA Ramghat Road, Vishnupuri, Near water tank, sector 5C, Agra, UP"
      },
      "4d472c2f-5ee9-4fa8-9d45-2fd8504c5caf": {
        "type": "General Store",
        "name": "U1_SHREE JI PROVISION",
        "route": "r2",
        "area": "MG Road",
        "address": "MAMU KHAN SHREE JI PROVISION Ramghat Road, Vishnupuri, Near water tank, sector 5C, Agra, UP"
      },
      "d83075fe-45f8-4cdf-9081-347319fea759": {
        "type": "General Store",
        "name": "U2_SHREE JI PROVISION",
        "route": "r3",
        "area": "MG Road",
        "address": "MAMU KHAN SHREE JI PROVISION Ramghat Road, Vishnupuri, Near water tank, sector 5C, Agra, UP"
      },
      "9ebd2ef1-9de0-4de1-af93-11a1c122c256": {
        "type": "General Store",
        "name": "U1_KAUSHAL KIRANA",
        "route": "r2",
        "area": "MG Road",
        "address": "MANJEET KAUSHAL KIRANA Ramghat Road, Vishnupuri, Near water tank, sector 5C, Agra, UP"
      },
      "22ba2d94-1698-429e-820d-7eafc3ed2696": {
        "type": "General Store",
        "name": "U2_KAUSHAL KIRANA",
        "route": "r3",
        "area": "MG Road",
        "address": "MANJEET KAUSHAL KIRANA Ramghat Road, Vishnupuri, Near water tank, sector 5C, Agra, UP"
      },
      "82e14632-3767-4d3d-a840-62fe67d06e4e": {
        "type": "General Store",
        "name": "U1_ATISHAY KIRANA",
        "route": "r4",
        "area": "MG Road",
        "address": "PRAKASH JAIN ATISHAY KIRANA Ramghat Road, Vishnupuri, Near water tank, sector 5C, Agra, UP"
      },
      "cf91cb12-1dea-4b16-87af-022312dff59d": {
        "type": "General Store",
        "name": "U2_ATISHAY KIRANA",
        "route": "r1",
        "area": "Koramangla",
        "address": "PRAKASH JAIN ATISHAY KIRANA Ramghat Road, Vishnupuri, Near water tank, sector 5C, Agra, UP"
      },
      "0abf7f73-232e-43c3-a573-4762c83d910d": {
        "type": "General Store",
        "name": "U1_UDAY GENERAL STORE",
        "route": "r2",
        "area": "MG Road",
        "address": "SUMIT UDAY GENERAL STORE Ramghat Road, Vishnupuri, Near water tank, sector 5C, Agra, UP"
      },
      "85c17784-4864-44c3-bf65-e49345c05e1e": {
        "type": "General Store",
        "name": "U2_UDAY GENERAL STORE",
        "route": "r3",
        "area": "Koramangla",
        "address": "SUMIT UDAY GENERAL STORE Ramghat Road, Vishnupuri, Near water tank, sector 5C, Agra, UP"
      },
      "4973dba9-ea97-49d7-834d-0c2705dd3c01": {
        "type": "General Store",
        "name": "U1_JAIN KIRANA",
        "route": "r2",
        "area": "MG Road",
        "address": "RAM JAIN KIRANA Ramghat Road, Vishnupuri, Near water tank, sector 5C, Agra, UP"
      },
      "08b0bcb5-2855-46b2-810c-500d13383925": {
        "type": "General Store",
        "name": "U2_JAIN KIRANA",
        "route": "r3",
        "area": "Koramangla",
        "address": "RAM JAIN KIRANA Ramghat Road, Vishnupuri, Near water tank, sector 5C, Agra, UP"
      },
      "d02565a6-8a98-4cb5-b95f-ae97e9abc800": {
        "type": "General Store",
        "name": "U1_PREETI GENERAL STORE",
        "route": "r4",
        "area": "MG Road",
        "address": "KAUSHAL PREETI GENERAL STORE Ramghat Road, Vishnupuri, Near water tank, sector 5C, Agra, UP"
      },
      "5a7ac9ef-779d-409a-bb02-9d8f8f660443": {
        "type": "General Store",
        "name": "U2_PREETI GENERAL STORE",
        "route": "r3",
        "area": "Koramangla",
        "address": "KAUSHAL PREETI GENERAL STORE Ramghat Road, Vishnupuri, Near water tank, sector 5C, Agra, UP"
      },
      "d2a654f6-9e13-402c-a4c7-0df3059ac8c3": {
        "type": "General Store",
        "name": "U1_SHAILENDRA AND NEELESH KIRANA",
        "route": "r2",
        "area": "MG Road",
        "address": "NITIN JAIN SHAILENDRA AND NEELESH KIRANA Ramghat Road, Vishnupuri, Near water tank, sector 5C, Agra, UP"
      },
      "707e2739-2217-4051-91c9-e20583715d88": {
        "type": "General Store",
        "name": "U2_SHAILENDRA AND NEELESH KIRANA",
        "route": "r3",
        "area": "Koramangla",
        "address": "NITIN JAIN SHAILENDRA AND NEELESH KIRANA Ramghat Road, Vishnupuri, Near water tank, sector 5C, Agra, UP"
      },
      "fcdd28ea-76d5-438b-91b7-51bd0f702f66": {
        "type": "General Store",
        "name": "U1_BABLU PROVISION",
        "route": "r1",
        "area": "HSR",
        "address": "MR JAIN BABLU PROVISION Ramghat Road, Vishnupuri, Near water tank, sector 5C, Agra, UP"
      },
      "d57f310d-29fc-41df-82eb-4bf414c2062a": {
        "type": "General Store",
        "name": "U2_BABLU PROVISION",
        "route": "r6",
        "area": "HSR",
        "address": "MR JAIN BABLU PROVISION Ramghat Road, Vishnupuri, Near water tank, sector 5C, Agra, UP"
      },
      "f0372412-fb1c-483b-beff-65f402bfcf97": {
        "type": "General Store",
        "name": "U1_Sonal Provision",
        "route": "r1",
        "area": "MG Road",
        "address": "MR NEEMA Sonal Provision Ramghat Road, Vishnupuri, Near water tank, sector 5C, Agra, UP"
      },
      "a6e41f5b-0b11-4dde-b625-9d4e87b4cfb6": {
        "type": "General Store",
        "name": "U2_Sonal Provision",
        "route": "r6",
        "area": "Koramangla",
        "address": "MR NEEMA Sonal Provision Ramghat Road, Vishnupuri, Near water tank, sector 5C, Agra, UP"
      },
      "1b77189a-0f19-4290-b7d9-a44743f2373b": {
        "type": "General Store",
        "name": "U1_AGGARWAL KIRANA AND GENERAL",
        "route": "r3",
        "area": "Koramangla",
        "address": "SACHIN NEEMA AGGARWAL KIRANA AND GENERAL Ramghat Road, Vishnupuri, Near water tank, sector 5C, Agra, UP"
      },
      "c7bd1d6a-f362-4baa-a153-0ea3fda621d3": {
        "type": "General Store",
        "name": "U2_AGGARWAL KIRANA AND GENERAL",
        "route": "r6",
        "area": "Koramangla",
        "address": "SACHIN NEEMA AGGARWAL KIRANA AND GENERAL Ramghat Road, Vishnupuri, Near water tank, sector 5C, Agra, UP"
      },
      "5baea352-d8ce-4306-a995-2038f46beb35": {
        "type": "General Store",
        "name": "U1_AMBIKA GENERAL STORE",
        "route": "r1",
        "area": "Koramangla",
        "address": "BABLU AMBIKA GENERAL STORE Ramghat Road, Vishnupuri, Near water tank, sector 5C, Agra, UP"
      },
      "af2762c5-9482-412f-9494-2073d6c212fe": {
        "type": "General Store",
        "name": "U2_AMBIKA GENERAL STORE",
        "route": "r4",
        "area": "MG Road",
        "address": "BABLU AMBIKA GENERAL STORE Ramghat Road, Vishnupuri, Near water tank, sector 5C, Agra, UP"
      },
      "d75afc7a-efa0-4cca-8fe2-240dade31a18": {
        "type": "General Store",
        "name": "U1_KGN KIRANA",
        "route": "r1",
        "area": "MG Road",
        "address": "Sonal Jain KGN KIRANA Ramghat Road, Vishnupuri, Near water tank, sector 5C, Agra, UP"
      },
      "c390aca3-9679-4ae6-acfd-f62ce216734f": {
        "type": "General Store",
        "name": "U2_KGN KIRANA",
        "route": "r6",
        "area": "MG Road",
        "address": "Sonal Jain KGN KIRANA Ramghat Road, Vishnupuri, Near water tank, sector 5C, Agra, UP"
      },
      "198c0ba7-f0cf-409d-825c-52f3f322a865": {
        "type": "General Store",
        "name": "U1_SHRI SAI PROVISION",
        "route": "r4",
        "area": "HSR",
        "address": "BHUPENDRA CHAURASIA SHRI SAI PROVISION Ramghat Road, Vishnupuri, Near water tank, sector 5C, Agra, UP"
      },
      "e2f98340-cdef-4d19-a259-ec82cbabfca6": {
        "type": "General Store",
        "name": "U2_SHRI SAI PROVISION",
        "route": "r4",
        "area": "Koramangla",
        "address": "BHUPENDRA CHAURASIA SHRI SAI PROVISION Ramghat Road, Vishnupuri, Near water tank, sector 5C, Agra, UP"
      },
      "d0525025-5e43-485e-9b6f-295ce1745f86": {
        "type": "General Store",
        "name": "U1_AGARWAL GENRAL",
        "route": "r2",
        "area": "HSR",
        "address": "WASHIM KHAN AGARWAL GENRAL Ramghat Road, Vishnupuri, Near water tank, sector 5C, Agra, UP"
      },
      "4414a6c4-49aa-4843-9412-423aaa60fd3c": {
        "type": "General Store",
        "name": "U2_AGARWAL GENRAL",
        "route": "r2",
        "area": "MG Road",
        "address": "WASHIM KHAN AGARWAL GENRAL Ramghat Road, Vishnupuri, Near water tank, sector 5C, Agra, UP"
      },
      "aa24abc4-a382-4691-a2f7-7bda1a976814": {
        "type": "General Store",
        "name": "U1_SENAM KIRANA",
        "route": "r2",
        "area": "Koramangla",
        "address": "GIRISH YADAV SENAM KIRANA Ramghat Road, Vishnupuri, Near water tank, sector 5C, Agra, UP"
      },
      "bc92905c-6c2f-43e7-bf50-29881b364427": {
        "type": "General Store",
        "name": "U2_SENAM KIRANA",
        "route": "r1",
        "area": "HSR",
        "address": "GIRISH YADAV SENAM KIRANA Ramghat Road, Vishnupuri, Near water tank, sector 5C, Agra, UP"
      },
      "92415ea8-1f06-48a3-b7e9-156d1a0c7865": {
        "type": "General Store",
        "name": "U1_SAHU JI KIRANA",
        "route": "r1",
        "area": "MG Road",
        "address": "JAIN SAHAB SAHU JI KIRANA Ramghat Road, Vishnupuri, Near water tank, sector 5C, Agra, UP"
      },
      "dc036f80-ffa7-45d1-87cf-21dc6120b287": {
        "type": "General Store",
        "name": "U2_SAHU JI KIRANA",
        "route": "r4",
        "area": "Koramangla",
        "address": "JAIN SAHAB SAHU JI KIRANA Ramghat Road, Vishnupuri, Near water tank, sector 5C, Agra, UP"
      },
      "b6d0f536-7b4e-4beb-86d3-63186d594c48": {
        "type": "General Store",
        "name": "U1_SUB SHREE KIRANA",
        "route": "r1",
        "area": "MG Road",
        "address": "SAHU SUB SHREE KIRANA Ramghat Road, Vishnupuri, Near water tank, sector 5C, Agra, UP"
      },
      "f506efa9-a247-4864-87fc-20961cb0e764": {
        "type": "General Store",
        "name": "U2_SUB SHREE KIRANA",
        "route": "r1",
        "area": "HSR",
        "address": "SAHU SUB SHREE KIRANA Ramghat Road, Vishnupuri, Near water tank, sector 5C, Agra, UP"
      },
      "25bd7800-bf8a-4d4a-a5b1-b15f16ea5519": {
        "type": "General Store",
        "name": "U1_RAJESH STORE",
        "route": "r2",
        "area": "MG Road",
        "address": "RINKU JAIN RAJESH STORE Ramghat Road, Vishnupuri, Near water tank, sector 5C, Agra, UP"
      },
      "868b1e23-ffc0-48f0-9ff7-dd98e0b6aeec": {
        "type": "General Store",
        "name": "U2_RAJESH STORE",
        "route": "r6",
        "area": "HSR",
        "address": "RINKU JAIN RAJESH STORE Ramghat Road, Vishnupuri, Near water tank, sector 5C, Agra, UP"
      },
      "771c2fc5-87d7-4eb1-b1ac-9daaab54b864": {
        "type": "General Store",
        "name": "U1_BOBBY GENRAL",
        "route": "r5",
        "area": "MG Road",
        "address": "VIRENDRA CHOUCKEY BOBBY GENRAL Ramghat Road, Vishnupuri, Near water tank, sector 5C, Agra, UP"
      },
      "5573e014-22e3-42ad-84d9-1875dda962c6": {
        "type": "General Store",
        "name": "U2_BOBBY GENRAL",
        "route": "r6",
        "area": "MG Road",
        "address": "VIRENDRA CHOUCKEY BOBBY GENRAL Ramghat Road, Vishnupuri, Near water tank, sector 5C, Agra, UP"
      },
      "25056625-f00b-4287-b3dd-ad7c7fd2b7f6": {
        "type": "General Store",
        "name": "U1_GUNGUN SHOPING",
        "route": "r1",
        "area": "MG Road",
        "address": "PARASH JAI GUNGUN SHOPING Ramghat Road, Vishnupuri, Near water tank, sector 5C, Agra, UP"
      },
      "6faafa63-babb-4158-ac85-310ab9bececd": {
        "type": "General Store",
        "name": "U2_GUNGUN SHOPING",
        "route": "r5",
        "area": "HSR",
        "address": "PARASH JAI GUNGUN SHOPING Ramghat Road, Vishnupuri, Near water tank, sector 5C, Agra, UP"
      },
      "10dfa1ca-58a1-42f0-9be8-93b4a0ff9cbe": {
        "type": "General Store",
        "name": "U1_Kanchan Provision",
        "route": "r5",
        "area": "HSR",
        "address": "ATISH BHAI Kanchan Provision Ramghat Road, Vishnupuri, Near water tank, sector 5C, Agra, UP"
      },
      "c417b584-c160-4d49-a2f7-30e4c4d29544": {
        "type": "General Store",
        "name": "U2_Kanchan Provision",
        "route": "r5",
        "area": "HSR",
        "address": "ATISH BHAI Kanchan Provision Ramghat Road, Vishnupuri, Near water tank, sector 5C, Agra, UP"
      },
      "da5d7b73-9293-4f7c-9f95-d1da02730263": {
        "type": "General Store",
        "name": "U1_Deepak Kirana and General Store",
        "route": "r4",
        "area": "HSR",
        "address": "KHALSA NAMKIN Deepak Kirana and General Store Ramghat Road, Vishnupuri, Near water tank, sector 5C, Agra, UP"
      },
      "793fb0d5-2f55-4285-bf80-f0d455f6cc05": {
        "type": "General Store",
        "name": "U2_Deepak Kirana and General Store",
        "route": "r4",
        "area": "Koramangla",
        "address": "KHALSA NAMKIN Deepak Kirana and General Store Ramghat Road, Vishnupuri, Near water tank, sector 5C, Agra, UP"
      },
      "5d8989e8-f815-46e2-9e68-9e35b7fd78b2": {
        "type": "General Store",
        "name": "U1_JAISHWAL PROVISION",
        "route": "r6",
        "area": "HSR",
        "address": "MADAN JAISHWAL PROVISION Ramghat Road, Vishnupuri, Near water tank, sector 5C, Agra, UP"
      },
      "08cc4196-4639-441b-abcb-e6a972ae4c5d": {
        "type": "General Store",
        "name": "U2_JAISHWAL PROVISION",
        "route": "r6",
        "area": "HSR",
        "address": "MADAN JAISHWAL PROVISION Ramghat Road, Vishnupuri, Near water tank, sector 5C, Agra, UP"
      },
      "fa3ba33c-93f5-4980-a687-f05666c0ec84": {
        "type": "General Store",
        "name": "U1_PARASH KIRANA",
        "route": "r1",
        "area": "MG Road",
        "address": "MANJEET SINGH PARASH KIRANA Ramghat Road, Vishnupuri, Near water tank, sector 5C, Agra, UP"
      },
      "f1be9688-0f4b-49d8-8856-0d9807687d28": {
        "type": "General Store",
        "name": "U2_PARASH KIRANA",
        "route": "r6",
        "area": "HSR",
        "address": "MANJEET SINGH PARASH KIRANA Ramghat Road, Vishnupuri, Near water tank, sector 5C, Agra, UP"
      },
      "f898b1dd-bc4e-48a6-a36a-89af6947035c": {
        "type": "General Store",
        "name": "U1_MITTAL KIRANA AND GENERAL STORE",
        "route": "r6",
        "area": "Koramangla",
        "address": "MANU MITTAL KIRANA AND GENERAL STORE Ramghat Road, Vishnupuri, Near water tank, sector 5C, Agra, UP"
      },
      "04b81028-457b-4496-a2d0-c3bc73fc1acc": {
        "type": "General Store",
        "name": "U2_MITTAL KIRANA AND GENERAL STORE",
        "route": "r3",
        "area": "Koramangla",
        "address": "MANU MITTAL KIRANA AND GENERAL STORE Ramghat Road, Vishnupuri, Near water tank, sector 5C, Agra, UP"
      },
      "1562d8b3-cdc4-4041-a90c-724c2598ebe9": {
        "type": "General Store",
        "name": "U1_SHIV SHANKAR KIRANA",
        "route": "r6",
        "area": "HSR",
        "address": "AVNISH SHIV SHANKAR KIRANA Ramghat Road, Vishnupuri, Near water tank, sector 5C, Agra, UP"
      },
      "777fa756-ef5b-4f81-8f51-c7c99ff1cbe5": {
        "type": "General Store",
        "name": "U2_SHIV SHANKAR KIRANA",
        "route": "r1",
        "area": "MG Road",
        "address": "AVNISH SHIV SHANKAR KIRANA Ramghat Road, Vishnupuri, Near water tank, sector 5C, Agra, UP"
      },
      "de585e18-0714-4def-9344-4f6a952023dc": {
        "type": "General Store",
        "name": "U1_PRATIK GENRAL",
        "route": "r4",
        "area": "HSR",
        "address": "Shailendra Kansana PRATIK GENRAL Ramghat Road, Vishnupuri, Near water tank, sector 5C, Agra, UP"
      },
      "81bbfc66-8012-44f7-96c4-e5a1d6a0cdc1": {
        "type": "General Store",
        "name": "U2_PRATIK GENRAL",
        "route": "r5",
        "area": "MG Road",
        "address": "Shailendra Kansana PRATIK GENRAL Ramghat Road, Vishnupuri, Near water tank, sector 5C, Agra, UP"
      },
      "c9c3a192-4fd0-4f29-bea6-ec14425ace5e": {
        "type": "General Store",
        "name": "U1_AMIT PROVISION",
        "route": "r2",
        "area": "Koramangla",
        "address": "PRAHLAD RATHORE AMIT PROVISION Ramghat Road, Vishnupuri, Near water tank, sector 5C, Agra, UP"
      },
      "58a28337-390f-40df-b6d7-8a8cb8b23657": {
        "type": "General Store",
        "name": "U2_AMIT PROVISION",
        "route": "r6",
        "area": "MG Road",
        "address": "PRAHLAD RATHORE AMIT PROVISION Ramghat Road, Vishnupuri, Near water tank, sector 5C, Agra, UP"
      },
      "a012a2ba-1024-40d6-9a1b-be307edb0c6d": {
        "type": "General Store",
        "name": "U1_PRAGTI GENRAL",
        "route": "r4",
        "area": "Koramangla",
        "address": "Imam PRAGTI GENRAL Ramghat Road, Vishnupuri, Near water tank, sector 5C, Agra, UP"
      },
      "65d17ee5-7b69-4b76-b619-e6524ef21111": {
        "type": "General Store",
        "name": "U2_PRAGTI GENRAL",
        "route": "r5",
        "area": "Koramangla",
        "address": "Imam PRAGTI GENRAL Ramghat Road, Vishnupuri, Near water tank, sector 5C, Agra, UP"
      },
      "d9351b35-d300-4e1d-9723-a0cc4881bb9c": {
        "type": "General Store",
        "name": "U1_LAXMAN KIRANA",
        "route": "r5",
        "area": "Koramangla",
        "address": "PRASHANT LAXMAN KIRANA Ramghat Road, Vishnupuri, Near water tank, sector 5C, Agra, UP"
      },
      "a376d323-4702-4f38-b338-6abe4418f30c": {
        "type": "General Store",
        "name": "U2_LAXMAN KIRANA",
        "route": "r1",
        "area": "Koramangla",
        "address": "PRASHANT LAXMAN KIRANA Ramghat Road, Vishnupuri, Near water tank, sector 5C, Agra, UP"
      },
      "e06d0784-12a3-4516-90da-3b1f760a21c9": {
        "type": "General Store",
        "name": "U1_ATISH KIRANA",
        "route": "r4",
        "area": "MG Road",
        "address": "KRISHNA ATISH KIRANA Ramghat Road, Vishnupuri, Near water tank, sector 5C, Agra, UP"
      },
      "50fc3aa3-dad8-4caa-aaca-4c03bdd57b65": {
        "type": "General Store",
        "name": "U2_ATISH KIRANA",
        "route": "r4",
        "area": "HSR",
        "address": "KRISHNA ATISH KIRANA Ramghat Road, Vishnupuri, Near water tank, sector 5C, Agra, UP"
      },
      "7e2d0ff7-a884-4af4-aa72-90dc50676bb3": {
        "type": "General Store",
        "name": "U1_SHIV SHAKTI KIRANA",
        "route": "r2",
        "area": "HSR",
        "address": "RAJENDRA SHIV SHAKTI KIRANA Ramghat Road, Vishnupuri, Near water tank, sector 5C, Agra, UP"
      },
      "b8b5425b-a8ce-43b4-997f-ebce4de42eb7": {
        "type": "General Store",
        "name": "U2_SHIV SHAKTI KIRANA",
        "route": "r6",
        "area": "MG Road",
        "address": "RAJENDRA SHIV SHAKTI KIRANA Ramghat Road, Vishnupuri, Near water tank, sector 5C, Agra, UP"
      },
      "7ffc490d-e5a1-46bc-aca7-b1b62acfc2f6": {
        "type": "General Store",
        "name": "U1_ABASH GENRAL",
        "route": "r1",
        "area": "HSR",
        "address": "RAJESH ABASH GENRAL Ramghat Road, Vishnupuri, Near water tank, sector 5C, Agra, UP"
      },
      "192b5ec8-1075-42df-a51b-d1236741199d": {
        "type": "General Store",
        "name": "U2_ABASH GENRAL",
        "route": "r1",
        "area": "Koramangla",
        "address": "RAJESH ABASH GENRAL Ramghat Road, Vishnupuri, Near water tank, sector 5C, Agra, UP"
      },
      "beb3c8c2-fea1-4894-bf7a-4081cb34771b": {
        "type": "General Store",
        "name": "U1_SAI NATH KIRANA",
        "route": "r3",
        "area": "MG Road",
        "address": "MAHENDRA PAL SAI NATH KIRANA Ramghat Road, Vishnupuri, Near water tank, sector 5C, Agra, UP"
      },
      "b65e889b-13f1-4f6b-96c5-c29680b13c4e": {
        "type": "General Store",
        "name": "U2_SAI NATH KIRANA",
        "route": "r1",
        "area": "HSR",
        "address": "MAHENDRA PAL SAI NATH KIRANA Ramghat Road, Vishnupuri, Near water tank, sector 5C, Agra, UP"
      },
      "14a93a20-6bbc-464a-9524-0d629ff13485": {
        "type": "General Store",
        "name": "U1_SIMARAN GENRAL",
        "route": "r2",
        "area": "HSR",
        "address": "AJAY SIMARAN GENRAL Ramghat Road, Vishnupuri, Near water tank, sector 5C, Agra, UP"
      },
      "08fc955c-c7a4-4ae4-baf4-c8c8ad8c7aa9": {
        "type": "General Store",
        "name": "U2_SIMARAN GENRAL",
        "route": "r6",
        "area": "HSR",
        "address": "AJAY SIMARAN GENRAL Ramghat Road, Vishnupuri, Near water tank, sector 5C, Agra, UP"
      },
      "ec3ee321-a5c0-4115-be20-627c69286522": {
        "type": "General Store",
        "name": "U1_SEERAN KIRANA",
        "route": "r2",
        "area": "HSR",
        "address": "SHAYAM TALREJA SEERAN KIRANA Ramghat Road, Vishnupuri, Near water tank, sector 5C, Agra, UP"
      },
      "6507362f-603a-43b0-a7ed-6b8e874b4db0": {
        "type": "General Store",
        "name": "U2_SEERAN KIRANA",
        "route": "r2",
        "area": "MG Road",
        "address": "SHAYAM TALREJA SEERAN KIRANA Ramghat Road, Vishnupuri, Near water tank, sector 5C, Agra, UP"
      },
      "d4bc94a5-3b29-4643-b8aa-bd3aa5339c81": {
        "type": "General Store",
        "name": "U1_SHYAM STORE",
        "route": "r1",
        "area": "HSR",
        "address": "KAMAL RAY SHYAM STORE Ramghat Road, Vishnupuri, Near water tank, sector 5C, Agra, UP"
      },
      "083a2771-a90c-4a61-9807-16df344784ce": {
        "type": "General Store",
        "name": "U2_SHYAM STORE",
        "route": "r1",
        "area": "MG Road",
        "address": "KAMAL RAY SHYAM STORE Ramghat Road, Vishnupuri, Near water tank, sector 5C, Agra, UP"
      },
      "9606f2fc-903a-47a8-bb55-a26f464d0fce": {
        "type": "General Store",
        "name": "U1_SHRI KRISHNA GENRAL.",
        "route": "r2",
        "area": "Koramangla",
        "address": "VIJAY MAHESHWARI SHRI KRISHNA GENRAL. Ramghat Road, Vishnupuri, Near water tank, sector 5C, Agra, UP"
      },
      "6ab1b3a0-6bc4-4318-b8cb-e2a7d450778a": {
        "type": "General Store",
        "name": "U2_SHRI KRISHNA GENRAL.",
        "route": "r4",
        "area": "Koramangla",
        "address": "VIJAY MAHESHWARI SHRI KRISHNA GENRAL. Ramghat Road, Vishnupuri, Near water tank, sector 5C, Agra, UP"
      },
      "dfbccc02-8c43-4b86-801a-c1ebb868a830": {
        "type": "General Store",
        "name": "U1_QUALITI GENRAL",
        "route": "r5",
        "area": "Koramangla",
        "address": "NAVIN QUALITI GENRAL Ramghat Road, Vishnupuri, Near water tank, sector 5C, Agra, UP"
      },
      "94d47f3e-4608-4b0f-817e-b8dc8ba04f89": {
        "type": "General Store",
        "name": "U2_QUALITI GENRAL",
        "route": "r4",
        "area": "MG Road",
        "address": "NAVIN QUALITI GENRAL Ramghat Road, Vishnupuri, Near water tank, sector 5C, Agra, UP"
      },
      "6d2913f7-a05a-41cb-a85c-382ce4751338": {
        "type": "General Store",
        "name": "U1_ARTI PROVISION",
        "route": "r3",
        "area": "MG Road",
        "address": "PRAKESH ARTI PROVISION Ramghat Road, Vishnupuri, Near water tank, sector 5C, Agra, UP"
      },
      "2f23680e-a32f-42ed-bb63-fcc39b0da7c3": {
        "type": "General Store",
        "name": "U2_ARTI PROVISION",
        "route": "r3",
        "area": "HSR",
        "address": "PRAKESH ARTI PROVISION Ramghat Road, Vishnupuri, Near water tank, sector 5C, Agra, UP"
      },
      "75fe0d62-74da-4e69-b6f9-9ddf4d31c74a": {
        "type": "General Store",
        "name": "U1_CHURASIYA GENERAL",
        "route": "r1",
        "area": "Koramangla",
        "address": "PANKAJ CHURASIYA GENERAL Ramghat Road, Vishnupuri, Near water tank, sector 5C, Agra, UP"
      },
      "98ee7613-d955-4dc0-a467-b79f47e4c96f": {
        "type": "General Store",
        "name": "U2_CHURASIYA GENERAL",
        "route": "r6",
        "area": "MG Road",
        "address": "PANKAJ CHURASIYA GENERAL Ramghat Road, Vishnupuri, Near water tank, sector 5C, Agra, UP"
      },
      "edec70d3-7f91-4fb8-be65-391907ed1482": {
        "type": "General Store",
        "name": "U1_SHREE KRISHNA GENERAL",
        "route": "r4",
        "area": "MG Road",
        "address": "MUKESH SHREE KRISHNA GENERAL Ramghat Road, Vishnupuri, Near water tank, sector 5C, Agra, UP"
      },
      "610d2522-3167-4be0-9ca6-bcc447628979": {
        "type": "General Store",
        "name": "U2_SHREE KRISHNA GENERAL",
        "route": "r5",
        "area": "MG Road",
        "address": "MUKESH SHREE KRISHNA GENERAL Ramghat Road, Vishnupuri, Near water tank, sector 5C, Agra, UP"
      },
      "868e4178-8319-44ae-91da-f548fdbea0da": {
        "type": "General Store",
        "name": "U1_SHIVANI PROVISION",
        "route": "r4",
        "area": "MG Road",
        "address": "VISHNU SHARMA SHIVANI PROVISION Ramghat Road, Vishnupuri, Near water tank, sector 5C, Agra, UP"
      },
      "bd049cb8-b725-4d7e-a1b4-db9976485ebe": {
        "type": "General Store",
        "name": "U2_SHIVANI PROVISION",
        "route": "r4",
        "area": "Koramangla",
        "address": "VISHNU SHARMA SHIVANI PROVISION Ramghat Road, Vishnupuri, Near water tank, sector 5C, Agra, UP"
      },
      "beaee8ae-c1b3-4eb7-bf88-2e0eae609f7e": {
        "type": "General Store",
        "name": "U1_NICE PLAZA",
        "route": "r2",
        "area": "HSR",
        "address": "Manoj NICE PLAZA Ramghat Road, Vishnupuri, Near water tank, sector 5C, Agra, UP"
      },
      "bf98bad8-b17d-4cc0-a64d-b59b28139547": {
        "type": "General Store",
        "name": "U2_NICE PLAZA",
        "route": "r6",
        "area": "HSR",
        "address": "Manoj NICE PLAZA Ramghat Road, Vishnupuri, Near water tank, sector 5C, Agra, UP"
      },
      "57ad7cb7-e6a1-404c-8ceb-0c2623388023": {
        "type": "General Store",
        "name": "U1_RAJESH STORE",
        "route": "r1",
        "area": "HSR",
        "address": "Manoj RAJESH STORE Ramghat Road, Vishnupuri, Near water tank, sector 5C, Agra, UP"
      },
      "ada7d9e6-988b-489c-b199-4778b2cc9c1e": {
        "type": "General Store",
        "name": "U2_RAJESH STORE",
        "route": "r1",
        "area": "MG Road",
        "address": "Manoj RAJESH STORE Ramghat Road, Vishnupuri, Near water tank, sector 5C, Agra, UP"
      },
      "2bdfba08-a42c-4c6e-8aed-b6fc27fcf809": {
        "type": "General Store",
        "name": "U1_SHIV SHAKTI KIRANA",
        "route": "r5",
        "area": "MG Road",
        "address": "Ramesh SHIV SHAKTI KIRANA Ramghat Road, Vishnupuri, Near water tank, sector 5C, Agra, UP"
      },
      "aef50f8b-59ad-41a0-bb3e-f5c56e4233bc": {
        "type": "General Store",
        "name": "U2_SHIV SHAKTI KIRANA",
        "route": "r6",
        "area": "HSR",
        "address": "Ramesh SHIV SHAKTI KIRANA Ramghat Road, Vishnupuri, Near water tank, sector 5C, Agra, UP"
      },
      "387cc640-c468-4bcf-baad-5e34e58674c2": {
        "type": "General Store",
        "name": "U1_Deepak Kirana",
        "route": "r4",
        "area": "MG Road",
        "address": "JAIDEEP Deepak Kirana Ramghat Road, Vishnupuri, Near water tank, sector 5C, Agra, UP"
      },
      "8620a3ae-b1b0-4937-b373-c14cac19a6e1": {
        "type": "General Store",
        "name": "U2_Deepak Kirana",
        "route": "r1",
        "area": "MG Road",
        "address": "JAIDEEP Deepak Kirana Ramghat Road, Vishnupuri, Near water tank, sector 5C, Agra, UP"
      },
      "34d3396d-2b3e-49e4-a8ad-99d582a0316b": {
        "type": "General Store",
        "name": "U1_SHRI BALAJI KIRANA STORES",
        "route": "r6",
        "area": "Koramangla",
        "address": "LUCKY SHRI BALAJI KIRANA STORES Ramghat Road, Vishnupuri, Near water tank, sector 5C, Agra, UP"
      },
      "7bad38c3-6267-4ded-8e58-3a8d625007e8": {
        "type": "General Store",
        "name": "U2_SHRI BALAJI KIRANA STORES",
        "route": "r3",
        "area": "HSR",
        "address": "LUCKY SHRI BALAJI KIRANA STORES Ramghat Road, Vishnupuri, Near water tank, sector 5C, Agra, UP"
      },
      "207d38b9-99b1-488b-959c-5ab8a60dc304": {
        "type": "General Store",
        "name": "U1_RIYA SIYA GENRAL",
        "route": "r3",
        "area": "MG Road",
        "address": "RAMHAIT SINGH RATHOR RIYA SIYA GENRAL Ramghat Road, Vishnupuri, Near water tank, sector 5C, Agra, UP"
      },
      "03e43d38-cac3-405d-b8e5-4db3406d92b4": {
        "type": "General Store",
        "name": "U2_RIYA SIYA GENRAL",
        "route": "r4",
        "area": "Koramangla",
        "address": "RAMHAIT SINGH RATHOR RIYA SIYA GENRAL Ramghat Road, Vishnupuri, Near water tank, sector 5C, Agra, UP"
      },
      "14e514e1-a4b8-4473-bf2a-5402bab7eea4": {
        "type": "General Store",
        "name": "U1_DAYA PROVISION",
        "route": "r4",
        "area": "HSR",
        "address": "GAUTAM SHAKYA DAYA PROVISION Ramghat Road, Vishnupuri, Near water tank, sector 5C, Agra, UP"
      },
      "59643c2d-bdfc-4b76-a30e-460da7c24b13": {
        "type": "General Store",
        "name": "U2_DAYA PROVISION",
        "route": "r1",
        "area": "Koramangla",
        "address": "GAUTAM SHAKYA DAYA PROVISION Ramghat Road, Vishnupuri, Near water tank, sector 5C, Agra, UP"
      },
      "e078d45d-fe79-48dd-9945-5da29d26d6d9": {
        "type": "General Store",
        "name": "U1_ANUSKA KIRANA",
        "route": "r3",
        "area": "HSR",
        "address": "SURENDRA YADAV ANSHI ANUSKA KIRANA Ramghat Road, Vishnupuri, Near water tank, sector 5C, Agra, UP"
      },
      "72cd1cdf-f1e4-4033-b2e8-c6dc489a542c": {
        "type": "General Store",
        "name": "U2_ANUSKA KIRANA",
        "route": "r4",
        "area": "MG Road",
        "address": "SURENDRA YADAV ANSHI ANUSKA KIRANA Ramghat Road, Vishnupuri, Near water tank, sector 5C, Agra, UP"
      },
      "3d7c57f1-1904-4a2d-bc03-3a9a93193a73": {
        "type": "General Store",
        "name": "U1_GARGA DIPARTMENAL",
        "route": "r6",
        "area": "MG Road",
        "address": "DHARMINDRA GUPTA GARGA DIPARTMENAL Ramghat Road, Vishnupuri, Near water tank, sector 5C, Agra, UP"
      },
      "e6755cba-cfa5-47c5-9c11-18d242636638": {
        "type": "General Store",
        "name": "U2_GARGA DIPARTMENAL",
        "route": "r1",
        "area": "HSR",
        "address": "DHARMINDRA GUPTA GARGA DIPARTMENAL Ramghat Road, Vishnupuri, Near water tank, sector 5C, Agra, UP"
      },
      "b4bc17ab-6d0d-4dd5-affd-55354d6ddfa0": {
        "type": "General Store",
        "name": "U1_DEV KIRANA",
        "route": "r5",
        "area": "Koramangla",
        "address": "KAMAL DEV KIRANA Ramghat Road, Vishnupuri, Near water tank, sector 5C, Agra, UP"
      },
      "5b91d674-871e-4042-ad14-0cc26a1b698f": {
        "type": "General Store",
        "name": "U2_DEV KIRANA",
        "route": "r5",
        "area": "MG Road",
        "address": "KAMAL DEV KIRANA Ramghat Road, Vishnupuri, Near water tank, sector 5C, Agra, UP"
      },
      "1a1ef710-02e0-4424-b0b4-37bc86f28e7c": {
        "type": "General Store",
        "name": "U1_SIDDHY VINAYAK",
        "route": "r6",
        "area": "Koramangla",
        "address": "SANTOSHI SIDDHY VINAYAK Ramghat Road, Vishnupuri, Near water tank, sector 5C, Agra, UP"
      },
      "c57bd7a1-66d5-4deb-8dd5-c16f6da34a5e": {
        "type": "General Store",
        "name": "U2_SIDDHY VINAYAK",
        "route": "r6",
        "area": "HSR",
        "address": "SANTOSHI SIDDHY VINAYAK Ramghat Road, Vishnupuri, Near water tank, sector 5C, Agra, UP"
      },
      "1060a42c-f56d-4a8e-890f-b749af41c7ae": {
        "type": "General Store",
        "name": "U1_JAI MAA VAISHNO",
        "route": "r4",
        "area": "Koramangla",
        "address": "SHAYM JAI MAA VAISHNO Ramghat Road, Vishnupuri, Near water tank, sector 5C, Agra, UP"
      },
      "3d5effca-2c0d-4416-85fe-0a13687861e4": {
        "type": "General Store",
        "name": "U2_JAI MAA VAISHNO",
        "route": "r6",
        "area": "Koramangla",
        "address": "SHAYM JAI MAA VAISHNO Ramghat Road, Vishnupuri, Near water tank, sector 5C, Agra, UP"
      },
      "09935831-c6c9-4590-9eac-43d85f26d3ae": {
        "type": "General Store",
        "name": "U1_Danish Genral",
        "route": "r2",
        "area": "HSR",
        "address": "KAMAD Danish Genral Ramghat Road, Vishnupuri, Near water tank, sector 5C, Agra, UP"
      },
      "f09a9f20-5ec4-404f-b0bb-8ee7e98b56cd": {
        "type": "General Store",
        "name": "U2_Danish Genral",
        "route": "r4",
        "area": "HSR",
        "address": "KAMAD Danish Genral Ramghat Road, Vishnupuri, Near water tank, sector 5C, Agra, UP"
      },
      "1d6309e7-3934-46b1-aa37-3afcb746544b": {
        "type": "General Store",
        "name": "U1_SHIV BABA GENRAL STORE",
        "route": "r1",
        "area": "Koramangla",
        "address": "VERINDRA SHIV BABA GENRAL STORE Ramghat Road, Vishnupuri, Near water tank, sector 5C, Agra, UP"
      },
      "add7421d-4922-414e-aa1c-dbf93496509c": {
        "type": "General Store",
        "name": "U2_SHIV BABA GENRAL STORE",
        "route": "r6",
        "area": "MG Road",
        "address": "VERINDRA SHIV BABA GENRAL STORE Ramghat Road, Vishnupuri, Near water tank, sector 5C, Agra, UP"
      },
      "8f321660-8ae2-4148-bd1e-b0713576e686": {
        "type": "General Store",
        "name": "U1_KRISHNA GENERAL",
        "route": "r2",
        "area": "HSR",
        "address": "GIRESH KRISHNA GENERAL Ramghat Road, Vishnupuri, Near water tank, sector 5C, Agra, UP"
      },
      "ec5159be-b0f3-4bdc-b66c-9cabf3e63fe5": {
        "type": "General Store",
        "name": "U2_KRISHNA GENERAL",
        "route": "r4",
        "area": "Koramangla",
        "address": "GIRESH KRISHNA GENERAL Ramghat Road, Vishnupuri, Near water tank, sector 5C, Agra, UP"
      },
      "a427509d-5a7f-4124-ba06-50b407477234": {
        "type": "General Store",
        "name": "U1_Agrawal Kirana",
        "route": "r4",
        "area": "HSR",
        "address": "SEFALI Agrawal Kirana Ramghat Road, Vishnupuri, Near water tank, sector 5C, Agra, UP"
      },
      "39797677-7df5-451a-a72d-7b84898333b2": {
        "type": "General Store",
        "name": "U2_Agrawal Kirana",
        "route": "r1",
        "area": "HSR",
        "address": "SEFALI Agrawal Kirana Ramghat Road, Vishnupuri, Near water tank, sector 5C, Agra, UP"
      },
      "0d13ba0e-56fa-4301-949e-ad9bd39e0e70": {
        "type": "General Store",
        "name": "U1_AMIT KIRANA",
        "route": "r3",
        "area": "Koramangla",
        "address": "BANIT AMIT KIRANA Ramghat Road, Vishnupuri, Near water tank, sector 5C, Agra, UP"
      },
      "e49c74c6-6630-4f9c-8114-f2aa8442907a": {
        "type": "General Store",
        "name": "U2_AMIT KIRANA",
        "route": "r6",
        "area": "HSR",
        "address": "BANIT AMIT KIRANA Ramghat Road, Vishnupuri, Near water tank, sector 5C, Agra, UP"
      },
      "147bbb0d-520c-48c4-bf5f-c2a6bab6ecb1": {
        "type": "General Store",
        "name": "U1_Taniska Genral",
        "route": "r6",
        "area": "MG Road",
        "address": "VIRENDRA GUPTA Taniska Genral Ramghat Road, Vishnupuri, Near water tank, sector 5C, Agra, UP"
      },
      "9b7ea441-bc23-461b-97e7-48f89421752b": {
        "type": "General Store",
        "name": "U2_Taniska Genral",
        "route": "r6",
        "area": "Koramangla",
        "address": "VIRENDRA GUPTA Taniska Genral Ramghat Road, Vishnupuri, Near water tank, sector 5C, Agra, UP"
      },
      "03769e95-dac5-41df-98cb-e3110235ccb6": {
        "type": "General Store",
        "name": "U1_RISHI KIRANA",
        "route": "r4",
        "area": "HSR",
        "address": "Gajendra Singh RISHI KIRANA Ramghat Road, Vishnupuri, Near water tank, sector 5C, Agra, UP"
      },
      "05738797-c2b6-46e0-aa35-9013b9a32d1f": {
        "type": "General Store",
        "name": "U2_RISHI KIRANA",
        "route": "r2",
        "area": "MG Road",
        "address": "Gajendra Singh RISHI KIRANA Ramghat Road, Vishnupuri, Near water tank, sector 5C, Agra, UP"
      },
      "08350dfd-420c-4b3c-a0a6-b825df59033d": {
        "type": "General Store",
        "name": "U1_DHAKAD KIRANA",
        "route": "r5",
        "area": "Koramangla",
        "address": "Vijay DHAKAD KIRANA Ramghat Road, Vishnupuri, Near water tank, sector 5C, Agra, UP"
      },
      "eb6317de-e4a7-4145-82b4-491b475fb8a2": {
        "type": "General Store",
        "name": "U2_DHAKAD KIRANA",
        "route": "r5",
        "area": "MG Road",
        "address": "Vijay DHAKAD KIRANA Ramghat Road, Vishnupuri, Near water tank, sector 5C, Agra, UP"
      },
      "1d358cdc-5021-4f21-897b-3eaafd04ab6e": {
        "type": "General Store",
        "name": "U1_GURUDEV PROVISION",
        "route": "r3",
        "area": "MG Road",
        "address": "Lallan GURUDEV PROVISION Ramghat Road, Vishnupuri, Near water tank, sector 5C, Agra, UP"
      },
      "3b926666-8eb8-4b53-82bf-749557966ea2": {
        "type": "General Store",
        "name": "U2_GURUDEV PROVISION",
        "route": "r2",
        "area": "Koramangla",
        "address": "Lallan GURUDEV PROVISION Ramghat Road, Vishnupuri, Near water tank, sector 5C, Agra, UP"
      },
      "69a07926-5f0e-44ff-848a-1a8ca7a86d48": {
        "type": "General Store",
        "name": "U1_AGARWAL GENRAL",
        "route": "r4",
        "area": "Koramangla",
        "address": "Ballu AGARWAL GENRAL Ramghat Road, Vishnupuri, Near water tank, sector 5C, Agra, UP"
      },
      "85b8b07d-d7fa-472a-8de2-4a7d7e6800c7": {
        "type": "General Store",
        "name": "U2_AGARWAL GENRAL",
        "route": "r6",
        "area": "Koramangla",
        "address": "Ballu AGARWAL GENRAL Ramghat Road, Vishnupuri, Near water tank, sector 5C, Agra, UP"
      },
      "229f40b6-3834-4c50-9692-477a3b1e8792": {
        "type": "General Store",
        "name": "U1_RATHORE KIRANA",
        "route": "r3",
        "area": "Koramangla",
        "address": "Vipin RATHORE KIRANA Ramghat Road, Vishnupuri, Near water tank, sector 5C, Agra, UP"
      },
      "86bc4295-e7c7-40da-96e6-189bf7a4ac6b": {
        "type": "General Store",
        "name": "U2_RATHORE KIRANA",
        "route": "r1",
        "area": "Koramangla",
        "address": "Vipin RATHORE KIRANA Ramghat Road, Vishnupuri, Near water tank, sector 5C, Agra, UP"
      },
      "13694889-2708-4177-b2c8-7cbe2c259b09": {
        "type": "General Store",
        "name": "U1_SATGURU GENRAL",
        "route": "r1",
        "area": "HSR",
        "address": "kirti SATGURU GENRAL Ramghat Road, Vishnupuri, Near water tank, sector 5C, Agra, UP"
      },
      "6e5f6429-e45c-4b03-8a1a-6e51a2e3b199": {
        "type": "General Store",
        "name": "U2_SATGURU GENRAL",
        "route": "r6",
        "area": "HSR",
        "address": "kirti SATGURU GENRAL Ramghat Road, Vishnupuri, Near water tank, sector 5C, Agra, UP"
      },
      "d1c9064e-555f-44ba-a188-22a02b2d302f": {
        "type": "General Store",
        "name": "U1_SUNIL GENRAL",
        "route": "r3",
        "area": "Koramangla",
        "address": "SHUBHAM SUNIL GENRAL Ramghat Road, Vishnupuri, Near water tank, sector 5C, Agra, UP"
      },
      "acda013d-f445-4139-8506-f06f7ab32da1": {
        "type": "General Store",
        "name": "U2_SUNIL GENRAL",
        "route": "r2",
        "area": "HSR",
        "address": "SHUBHAM SUNIL GENRAL Ramghat Road, Vishnupuri, Near water tank, sector 5C, Agra, UP"
      },
      "08a83b8d-1c11-4ea9-958b-82f323e4c63a": {
        "type": "General Store",
        "name": "U1_SUMEET KIRANA",
        "route": "r6",
        "area": "HSR",
        "address": "ANIL PAN SUMEET KIRANA Ramghat Road, Vishnupuri, Near water tank, sector 5C, Agra, UP"
      },
      "b86e7b4f-a246-411b-9020-378c08d5f90a": {
        "type": "General Store",
        "name": "U2_SUMEET KIRANA",
        "route": "r5",
        "area": "HSR",
        "address": "ANIL PAN SUMEET KIRANA Ramghat Road, Vishnupuri, Near water tank, sector 5C, Agra, UP"
      },
      "85135da3-e318-435c-8dfd-94e2562bad2d": {
        "type": "General Store",
        "name": "U1_OM SHANTI",
        "route": "r6",
        "area": "MG Road",
        "address": "ANIL JAIN OM SHANTI Ramghat Road, Vishnupuri, Near water tank, sector 5C, Agra, UP"
      },
      "cb6b90a2-cf81-4d68-92e1-9ac13d1699f4": {
        "type": "General Store",
        "name": "U2_OM SHANTI",
        "route": "r2",
        "area": "Koramangla",
        "address": "ANIL JAIN OM SHANTI Ramghat Road, Vishnupuri, Near water tank, sector 5C, Agra, UP"
      },
      "d882f7c0-d6f5-4c87-a761-acd6ad608976": {
        "type": "General Store",
        "name": "U1_MAA VAISHNO KIRANA",
        "route": "r2",
        "area": "HSR",
        "address": "PIRVIN KUMAR MAA VAISHNO KIRANA Ramghat Road, Vishnupuri, Near water tank, sector 5C, Agra, UP"
      },
      "ec7251b9-7940-4eae-9957-1576b1d9e985": {
        "type": "General Store",
        "name": "U2_MAA VAISHNO KIRANA",
        "route": "r4",
        "area": "MG Road",
        "address": "PIRVIN KUMAR MAA VAISHNO KIRANA Ramghat Road, Vishnupuri, Near water tank, sector 5C, Agra, UP"
      },
      "39e28e53-a99a-4acd-a597-3016003fd673": {
        "type": "General Store",
        "name": "U1_SAPNA SRANGAR",
        "route": "r1",
        "area": "MG Road",
        "address": "KRISHNA SAPNA SRANGAR Ramghat Road, Vishnupuri, Near water tank, sector 5C, Agra, UP"
      },
      "a3845f1e-6814-4b71-8d67-455d705f8ad0": {
        "type": "General Store",
        "name": "U2_SAPNA SRANGAR",
        "route": "r5",
        "area": "Koramangla",
        "address": "KRISHNA SAPNA SRANGAR Ramghat Road, Vishnupuri, Near water tank, sector 5C, Agra, UP"
      },
      "a7b87f0c-1fb0-4c4e-a356-614240d923ea": {
        "type": "General Store",
        "name": "U1_MAYA GENRAL",
        "route": "r1",
        "area": "MG Road",
        "address": "UMA MAYA GENRAL Ramghat Road, Vishnupuri, Near water tank, sector 5C, Agra, UP"
      },
      "c9a45b4b-85de-4742-8a89-851041830860": {
        "type": "General Store",
        "name": "U2_MAYA GENRAL",
        "route": "r1",
        "area": "MG Road",
        "address": "UMA MAYA GENRAL Ramghat Road, Vishnupuri, Near water tank, sector 5C, Agra, UP"
      },
      "33514c25-6e77-4eab-a118-c42642ee1a5c": {
        "type": "General Store",
        "name": "U1_SATNAM SAKSHI",
        "route": "r1",
        "area": "HSR",
        "address": "VANSH SATNAM SAKSHI Ramghat Road, Vishnupuri, Near water tank, sector 5C, Agra, UP"
      },
      "bf23d823-ed34-47bc-ab25-55aca0422f82": {
        "type": "General Store",
        "name": "U2_SATNAM SAKSHI",
        "route": "r4",
        "area": "Koramangla",
        "address": "VANSH SATNAM SAKSHI Ramghat Road, Vishnupuri, Near water tank, sector 5C, Agra, UP"
      },
      "791e98c8-8b2b-47a1-ac08-69e1cd50dc40": {
        "type": "General Store",
        "name": "U1_GOYAL KIRANA",
        "route": "r4",
        "area": "HSR",
        "address": "PAWAN GOYAL KIRANA Ramghat Road, Vishnupuri, Near water tank, sector 5C, Agra, UP"
      },
      "95f49405-94e1-4423-bdf6-049b1271e5d1": {
        "type": "General Store",
        "name": "U2_GOYAL KIRANA",
        "route": "r3",
        "area": "HSR",
        "address": "PAWAN GOYAL KIRANA Ramghat Road, Vishnupuri, Near water tank, sector 5C, Agra, UP"
      },
      "0b0ad42e-c00d-4126-a2b2-202ecc9c56a8": {
        "type": "General Store",
        "name": "U1_KHANDELWAL GENERAL",
        "route": "r3",
        "area": "HSR",
        "address": "ADESH KHANDELWAL GENERAL Ramghat Road, Vishnupuri, Near water tank, sector 5C, Agra, UP"
      },
      "d6aa696a-8bb8-4377-ac8b-1892f2be6af0": {
        "type": "General Store",
        "name": "U2_KHANDELWAL GENERAL",
        "route": "r4",
        "area": "HSR",
        "address": "ADESH KHANDELWAL GENERAL Ramghat Road, Vishnupuri, Near water tank, sector 5C, Agra, UP"
      },
      "9798d2a3-53d3-4ae2-8f10-929309213a97": {
        "type": "General Store",
        "name": "U1_MAA KATAYNI",
        "route": "r6",
        "area": "HSR",
        "address": "MAMTA AGARWAL MAA KATAYNI Ramghat Road, Vishnupuri, Near water tank, sector 5C, Agra, UP"
      },
      "6d77c6b5-1f2b-4306-bcbd-b35676fe7395": {
        "type": "General Store",
        "name": "U2_MAA KATAYNI",
        "route": "r1",
        "area": "Koramangla",
        "address": "MAMTA AGARWAL MAA KATAYNI Ramghat Road, Vishnupuri, Near water tank, sector 5C, Agra, UP"
      },
      "08fa72d6-8bb8-4ac3-ad68-35afcd556eba": {
        "type": "General Store",
        "name": "U1_SANTOSHI KIRANA",
        "route": "r4",
        "area": "MG Road",
        "address": "LALU SANTOSHI KIRANA Ramghat Road, Vishnupuri, Near water tank, sector 5C, Agra, UP"
      },
      "61552888-10fb-40a1-b81a-4a3d64684078": {
        "type": "General Store",
        "name": "U2_SANTOSHI KIRANA",
        "route": "r1",
        "area": "MG Road",
        "address": "LALU SANTOSHI KIRANA Ramghat Road, Vishnupuri, Near water tank, sector 5C, Agra, UP"
      },
      "c72694e3-c9e2-4cc9-ac33-94ddd209ea59": {
        "type": "General Store",
        "name": "U1_SHIV GENERAL",
        "route": "r2",
        "area": "MG Road",
        "address": "NIKHIL SHIV GENERAL Ramghat Road, Vishnupuri, Near water tank, sector 5C, Agra, UP"
      },
      "f2cb832f-3806-4de6-8ab9-4f5d7cf8d8eb": {
        "type": "General Store",
        "name": "U2_SHIV GENERAL",
        "route": "r5",
        "area": "Koramangla",
        "address": "NIKHIL SHIV GENERAL Ramghat Road, Vishnupuri, Near water tank, sector 5C, Agra, UP"
      },
      "303d29cf-404f-467d-9ec7-be6afb898f04": {
        "type": "General Store",
        "name": "U1_VIJAY ENTERPRISES",
        "route": "r1",
        "area": "MG Road",
        "address": "VISHAL VIJAY ENTERPRISES Ramghat Road, Vishnupuri, Near water tank, sector 5C, Agra, UP"
      },
      "b8c285d3-8747-407b-be22-5879b2ed768a": {
        "type": "General Store",
        "name": "U2_VIJAY ENTERPRISES",
        "route": "r2",
        "area": "Koramangla",
        "address": "VISHAL VIJAY ENTERPRISES Ramghat Road, Vishnupuri, Near water tank, sector 5C, Agra, UP"
      },
      "b6f6d799-b1b5-496c-9715-b7ebe36118ae": {
        "type": "General Store",
        "name": "U1_KUSHUBU DEPT",
        "route": "r4",
        "area": "HSR",
        "address": "SHUBHAM KUSHUBU DEPT Ramghat Road, Vishnupuri, Near water tank, sector 5C, Agra, UP"
      },
      "bffc4df6-7853-496f-b158-c4c6a5cbb892": {
        "type": "General Store",
        "name": "U2_KUSHUBU DEPT",
        "route": "r3",
        "area": "MG Road",
        "address": "SHUBHAM KUSHUBU DEPT Ramghat Road, Vishnupuri, Near water tank, sector 5C, Agra, UP"
      },
      "0c1d71ac-c244-4121-8dd7-505abed1fc4b": {
        "type": "General Store",
        "name": "U1_SHRI JI PROVIJAN",
        "route": "r5",
        "area": "Koramangla",
        "address": "KULDEEP SINGH SHRI JI PROVIJAN Ramghat Road, Vishnupuri, Near water tank, sector 5C, Agra, UP"
      },
      "9f7cd82a-9af1-4fea-8635-144e6bf4e5c0": {
        "type": "General Store",
        "name": "U2_SHRI JI PROVIJAN",
        "route": "r2",
        "area": "Koramangla",
        "address": "KULDEEP SINGH SHRI JI PROVIJAN Ramghat Road, Vishnupuri, Near water tank, sector 5C, Agra, UP"
      },
      "c908eb96-aaf0-4e36-9351-fd5e8a606968": {
        "type": "General Store",
        "name": "U1_SANJAY GENERAL",
        "route": "r1",
        "area": "Koramangla",
        "address": "M K GUPTA SANJAY GENERAL Ramghat Road, Vishnupuri, Near water tank, sector 5C, Agra, UP"
      },
      "fa341718-a647-477e-8b60-9da60083baad": {
        "type": "General Store",
        "name": "U2_SANJAY GENERAL",
        "route": "r3",
        "area": "MG Road",
        "address": "M K GUPTA SANJAY GENERAL Ramghat Road, Vishnupuri, Near water tank, sector 5C, Agra, UP"
      },
      "6c9538f3-77bf-4d67-89f9-ff8a190757b5": {
        "type": "General Store",
        "name": "U1_PRAKASH GENRAL",
        "route": "r5",
        "area": "Koramangla",
        "address": "NITIN GUPTA PRAKASH GENRAL Ramghat Road, Vishnupuri, Near water tank, sector 5C, Agra, UP"
      },
      "8d7b60c6-b267-4de8-9b94-93c15582927d": {
        "type": "General Store",
        "name": "U2_PRAKASH GENRAL",
        "route": "r4",
        "area": "MG Road",
        "address": "NITIN GUPTA PRAKASH GENRAL Ramghat Road, Vishnupuri, Near water tank, sector 5C, Agra, UP"
      },
      "d7485cfb-fccb-4fab-bd22-88dd44d8bfd6": {
        "type": "General Store",
        "name": "U1_LAVI STORE",
        "route": "r1",
        "area": "MG Road",
        "address": "VAIBHAV VAKHADE LAVI STORE Ramghat Road, Vishnupuri, Near water tank, sector 5C, Agra, UP"
      },
      "e293ab2c-6bd0-49eb-9255-65b89a2e3859": {
        "type": "General Store",
        "name": "U2_LAVI STORE",
        "route": "r2",
        "area": "Koramangla",
        "address": "VAIBHAV VAKHADE LAVI STORE Ramghat Road, Vishnupuri, Near water tank, sector 5C, Agra, UP"
      },
      "7a3a5a68-d3fd-47bf-ac88-29d25a26a88d": {
        "type": "General Store",
        "name": "U1_BALAJI KIRANA",
        "route": "r3",
        "area": "Koramangla",
        "address": "PAWAN GUPTA BALAJI KIRANA Ramghat Road, Vishnupuri, Near water tank, sector 5C, Agra, UP"
      },
      "18277163-7c3b-45d6-a2dc-45bdd3e0b0a0": {
        "type": "General Store",
        "name": "U2_BALAJI KIRANA",
        "route": "r6",
        "area": "Koramangla",
        "address": "PAWAN GUPTA BALAJI KIRANA Ramghat Road, Vishnupuri, Near water tank, sector 5C, Agra, UP"
      },
      "9f3265dd-fb9e-4479-b2dd-4c2233114f77": {
        "type": "General Store",
        "name": "U1_SEFALI GENRAL",
        "route": "r4",
        "area": "HSR",
        "address": "DEVENDRA SINGH YADAV SEFALI GENRAL Ramghat Road, Vishnupuri, Near water tank, sector 5C, Agra, UP"
      },
      "c788f24e-5bd6-4f56-ac22-32a8cca7907f": {
        "type": "General Store",
        "name": "U2_SEFALI GENRAL",
        "route": "r4",
        "area": "MG Road",
        "address": "DEVENDRA SINGH YADAV SEFALI GENRAL Ramghat Road, Vishnupuri, Near water tank, sector 5C, Agra, UP"
      },
      "a67dd940-bb0f-43a0-8935-3bfbbcf8e246": {
        "type": "General Store",
        "name": "U1_VISHAKHA KIRANA",
        "route": "r3",
        "area": "MG Road",
        "address": "Bhupendra VISHAKHA KIRANA Ramghat Road, Vishnupuri, Near water tank, sector 5C, Agra, UP"
      },
      "2d71788d-5862-4a01-ad43-edd66ede8d29": {
        "type": "General Store",
        "name": "U2_VISHAKHA KIRANA",
        "route": "r5",
        "area": "Koramangla",
        "address": "Bhupendra VISHAKHA KIRANA Ramghat Road, Vishnupuri, Near water tank, sector 5C, Agra, UP"
      },
      "6dc27f1b-2b33-4769-9d0d-81f1ec9a040b": {
        "type": "General Store",
        "name": "U1_AMAR PROVISION",
        "route": "r5",
        "area": "HSR",
        "address": "Hariom AMAR PROVISION Ramghat Road, Vishnupuri, Near water tank, sector 5C, Agra, UP"
      },
      "a8f40ef4-2606-462e-8097-48d0c91406ba": {
        "type": "General Store",
        "name": "U2_AMAR PROVISION",
        "route": "r5",
        "area": "HSR",
        "address": "Hariom AMAR PROVISION Ramghat Road, Vishnupuri, Near water tank, sector 5C, Agra, UP"
      },
      "808194b7-bf04-4733-a6dc-720c4a7a67b6": {
        "type": "General Store",
        "name": "U1_JAI SANTOSHI KIRANA",
        "route": "r6",
        "area": "Koramangla",
        "address": "MANOJ KUMAR JAI SANTOSHI KIRANA Ramghat Road, Vishnupuri, Near water tank, sector 5C, Agra, UP"
      },
      "ce352662-d2b1-4293-9d3e-36eac2086f90": {
        "type": "General Store",
        "name": "U2_JAI SANTOSHI KIRANA",
        "route": "r2",
        "area": "MG Road",
        "address": "MANOJ KUMAR JAI SANTOSHI KIRANA Ramghat Road, Vishnupuri, Near water tank, sector 5C, Agra, UP"
      },
      "f531941e-bd7c-41ca-9cd0-809cc58b3b36": {
        "type": "General Store",
        "name": "U1_GURU KRIPA KIRANA AND GENERAL STORE",
        "route": "r6",
        "area": "MG Road",
        "address": "SHIV SHKTI GENRAL GURU KRIPA KIRANA AND GENERAL STORE Ramghat Road, Vishnupuri, Near water tank, sector 5C, Agra, UP"
      },
      "1170bbf2-b073-4d2a-bd1c-4d5dc7ce9c38": {
        "type": "General Store",
        "name": "U2_GURU KRIPA KIRANA AND GENERAL STORE",
        "route": "r3",
        "area": "Koramangla",
        "address": "SHIV SHKTI GENRAL GURU KRIPA KIRANA AND GENERAL STORE Ramghat Road, Vishnupuri, Near water tank, sector 5C, Agra, UP"
      },
      "fd79c8e2-9145-496c-9fd6-f46b88488444": {
        "type": "General Store",
        "name": "U1_SHIKHA GENRAL",
        "route": "r2",
        "area": "Koramangla",
        "address": "Sunil SHIKHA GENRAL Ramghat Road, Vishnupuri, Near water tank, sector 5C, Agra, UP"
      },
      "2d00bdc7-6360-4bd1-bbad-460c5fa3036e": {
        "type": "General Store",
        "name": "U2_SHIKHA GENRAL",
        "route": "r4",
        "area": "MG Road",
        "address": "Sunil SHIKHA GENRAL Ramghat Road, Vishnupuri, Near water tank, sector 5C, Agra, UP"
      },
      "172881b0-fefd-4196-8e59-5d1a7856b4c9": {
        "type": "General Store",
        "name": "U1_UNCAL CORNAR",
        "route": "r4",
        "area": "Koramangla",
        "address": "Satish UNCAL CORNAR Ramghat Road, Vishnupuri, Near water tank, sector 5C, Agra, UP"
      },
      "312b69c5-f767-4241-8b9f-7a65d5bd4aa1": {
        "type": "General Store",
        "name": "U2_UNCAL CORNAR",
        "route": "r6",
        "area": "MG Road",
        "address": "Satish UNCAL CORNAR Ramghat Road, Vishnupuri, Near water tank, sector 5C, Agra, UP"
      },
      "bc4ada48-88d8-44d6-bcd5-726bdac212d2": {
        "type": "General Store",
        "name": "U1_GREEN S SUPER STORE",
        "route": "r6",
        "area": "Koramangla",
        "address": "Raju GREEN S SUPER STORE Ramghat Road, Vishnupuri, Near water tank, sector 5C, Agra, UP"
      },
      "1751890b-cb18-4133-990d-bb20c1cdcd31": {
        "type": "General Store",
        "name": "U2_GREEN S SUPER STORE",
        "route": "r4",
        "area": "HSR",
        "address": "Raju GREEN S SUPER STORE Ramghat Road, Vishnupuri, Near water tank, sector 5C, Agra, UP"
      },
      "945c93bb-e801-4987-bdd8-6c2a603f7e74": {
        "type": "General Store",
        "name": "U1_Rathore Kirana",
        "route": "r3",
        "area": "Koramangla",
        "address": "MANOJ Rathore Kirana Ramghat Road, Vishnupuri, Near water tank, sector 5C, Agra, UP"
      },
      "b993d773-5d1f-4eac-8030-edac15ce3951": {
        "type": "General Store",
        "name": "U2_Rathore Kirana",
        "route": "r2",
        "area": "MG Road",
        "address": "MANOJ Rathore Kirana Ramghat Road, Vishnupuri, Near water tank, sector 5C, Agra, UP"
      },
      "9b209a8c-c240-4517-b7ec-81954e38ec5f": {
        "type": "General Store",
        "name": "U1_Apne Dhruv Bhai Genral",
        "route": "r3",
        "area": "HSR",
        "address": "MOHAN Apne Dhruv Bhai Genral Ramghat Road, Vishnupuri, Near water tank, sector 5C, Agra, UP"
      },
      "91a34464-1aed-4186-a891-ca71fddc1014": {
        "type": "General Store",
        "name": "U2_Apne Dhruv Bhai Genral",
        "route": "r5",
        "area": "HSR",
        "address": "MOHAN Apne Dhruv Bhai Genral Ramghat Road, Vishnupuri, Near water tank, sector 5C, Agra, UP"
      },
      "bf815056-d0e0-4745-a7c5-37ed250b6313": {
        "type": "General Store",
        "name": "U1_PAL KIRANA",
        "route": "r5",
        "area": "HSR",
        "address": "GHANSHYAM PAL KIRANA Ramghat Road, Vishnupuri, Near water tank, sector 5C, Agra, UP"
      },
      "ac5a111d-430a-443e-9be4-a8059dca05c0": {
        "type": "General Store",
        "name": "U2_PAL KIRANA",
        "route": "r6",
        "area": "Koramangla",
        "address": "GHANSHYAM PAL KIRANA Ramghat Road, Vishnupuri, Near water tank, sector 5C, Agra, UP"
      },
      "ba013c4e-7a99-4255-a285-299e12bb289f": {
        "type": "General Store",
        "name": "U1_JAI MATA DI",
        "route": "r4",
        "area": "HSR",
        "address": "Naresh Ahuja JAI MATA DI Ramghat Road, Vishnupuri, Near water tank, sector 5C, Agra, UP"
      },
      "2ee0b782-35eb-4c2f-8b8d-8645cc4cce6e": {
        "type": "General Store",
        "name": "U2_JAI MATA DI",
        "route": "r6",
        "area": "MG Road",
        "address": "Naresh Ahuja JAI MATA DI Ramghat Road, Vishnupuri, Near water tank, sector 5C, Agra, UP"
      },
      "fa6679c6-69f2-4e79-a6fd-9781c15603a0": {
        "type": "General Store",
        "name": "U1_LUCKY GENERAL STORE",
        "route": "r6",
        "area": "MG Road",
        "address": "RAM KUMAR LUCKY GENERAL STORE Ramghat Road, Vishnupuri, Near water tank, sector 5C, Agra, UP"
      },
      "42e02e16-dd46-4b0c-9a9a-c388ab2fc528": {
        "type": "General Store",
        "name": "U2_LUCKY GENERAL STORE",
        "route": "r3",
        "area": "Koramangla",
        "address": "RAM KUMAR LUCKY GENERAL STORE Ramghat Road, Vishnupuri, Near water tank, sector 5C, Agra, UP"
      },
      "91979f2d-7001-4445-9906-f2098d36018f": {
        "type": "General Store",
        "name": "U1_JAI BALAJI",
        "route": "r3",
        "area": "HSR",
        "address": "VIJAY SINGH KUSHWAH JAI BALAJI Ramghat Road, Vishnupuri, Near water tank, sector 5C, Agra, UP"
      },
      "e77b74f8-e627-489c-aad9-a8ff5ddb2240": {
        "type": "General Store",
        "name": "U2_JAI BALAJI",
        "route": "r4",
        "area": "HSR",
        "address": "VIJAY SINGH KUSHWAH JAI BALAJI Ramghat Road, Vishnupuri, Near water tank, sector 5C, Agra, UP"
      },
      "94d04e29-6988-4821-a184-1687927177ef": {
        "type": "General Store",
        "name": "U1_SHAYM KIRANA",
        "route": "r4",
        "area": "MG Road",
        "address": "ARUN ASTAHANA SHAYM KIRANA Ramghat Road, Vishnupuri, Near water tank, sector 5C, Agra, UP"
      },
      "2fba96e1-95d7-4224-9a17-a64f920b9634": {
        "type": "General Store",
        "name": "U2_SHAYM KIRANA",
        "route": "r6",
        "area": "MG Road",
        "address": "ARUN ASTAHANA SHAYM KIRANA Ramghat Road, Vishnupuri, Near water tank, sector 5C, Agra, UP"
      },
      "570a3035-3fe3-4c57-8083-92473b791ed7": {
        "type": "General Store",
        "name": "U1_NEW BALA",
        "route": "r4",
        "area": "MG Road",
        "address": "ANUJ NEW BALA Ramghat Road, Vishnupuri, Near water tank, sector 5C, Agra, UP"
      },
      "91cef057-f67d-4f72-b8c4-f0cedbe024ac": {
        "type": "General Store",
        "name": "U2_NEW BALA",
        "route": "r1",
        "area": "Koramangla",
        "address": "ANUJ NEW BALA Ramghat Road, Vishnupuri, Near water tank, sector 5C, Agra, UP"
      },
      "2a8b4ddc-706e-4f5e-a210-f47ea98f8388": {
        "type": "General Store",
        "name": "U1_BALAJI TRADERS",
        "route": "r4",
        "area": "HSR",
        "address": "ANUJ BALAJI TRADERS Ramghat Road, Vishnupuri, Near water tank, sector 5C, Agra, UP"
      },
      "1cf7266b-a8ac-43f4-a98c-7f7f251c0695": {
        "type": "General Store",
        "name": "U2_BALAJI TRADERS",
        "route": "r5",
        "area": "MG Road",
        "address": "ANUJ BALAJI TRADERS Ramghat Road, Vishnupuri, Near water tank, sector 5C, Agra, UP"
      },
      "db66755a-ee6b-421b-9d44-ec2a3c70f92f": {
        "type": "General Store",
        "name": "U1_Kapil Kirana",
        "route": "r6",
        "area": "MG Road",
        "address": "ANUJ Kapil Kirana Ramghat Road, Vishnupuri, Near water tank, sector 5C, Agra, UP"
      },
      "a712f9e3-d9c2-4997-9ba0-cfa5a514187d": {
        "type": "General Store",
        "name": "U2_Kapil Kirana",
        "route": "r5",
        "area": "HSR",
        "address": "ANUJ Kapil Kirana Ramghat Road, Vishnupuri, Near water tank, sector 5C, Agra, UP"
      },
      "d14d562b-3d41-4f07-9528-0f5a26708d8d": {
        "type": "General Store",
        "name": "U1_SHRI RAM KIRANA",
        "route": "r6",
        "area": "MG Road",
        "address": "GABBAN BHAGEL SHRI RAM KIRANA Ramghat Road, Vishnupuri, Near water tank, sector 5C, Agra, UP"
      },
      "13228205-8a91-44b1-8980-480b267bb18b": {
        "type": "General Store",
        "name": "U2_SHRI RAM KIRANA",
        "route": "r5",
        "area": "Koramangla",
        "address": "GABBAN BHAGEL SHRI RAM KIRANA Ramghat Road, Vishnupuri, Near water tank, sector 5C, Agra, UP"
      },
      "f5d0e26d-ae98-46c5-a1a9-3446e508e954": {
        "type": "General Store",
        "name": "U1_JAI MAA KALI GENRAL",
        "route": "r6",
        "area": "Koramangla",
        "address": "BHOLE NATH PAN BHANDAR JAI MAA KALI GENRAL Ramghat Road, Vishnupuri, Near water tank, sector 5C, Agra, UP"
      },
      "c7fe727c-2fe4-4a2b-acd6-a02d5f885a8b": {
        "type": "General Store",
        "name": "U2_JAI MAA KALI GENRAL",
        "route": "r6",
        "area": "HSR",
        "address": "BHOLE NATH PAN BHANDAR JAI MAA KALI GENRAL Ramghat Road, Vishnupuri, Near water tank, sector 5C, Agra, UP"
      },
      "de9adfc9-18e1-4352-9d91-140202372c54": {
        "type": "General Store",
        "name": "U1_SHIV KIRANA",
        "route": "r3",
        "area": "Koramangla",
        "address": "MANOHAR SHIV KIRANA Ramghat Road, Vishnupuri, Near water tank, sector 5C, Agra, UP"
      },
      "19e66429-478f-4701-8fb0-725869522fe8": {
        "type": "General Store",
        "name": "U2_SHIV KIRANA",
        "route": "r4",
        "area": "MG Road",
        "address": "MANOHAR SHIV KIRANA Ramghat Road, Vishnupuri, Near water tank, sector 5C, Agra, UP"
      },
      "8fdf1ca4-418e-400a-8a2b-d270585e858b": {
        "type": "General Store",
        "name": "U1_KAMAL KIRANA",
        "route": "r5",
        "area": "Koramangla",
        "address": "SAI KAMAL KIRANA Ramghat Road, Vishnupuri, Near water tank, sector 5C, Agra, UP"
      },
      "44430a94-9938-4cde-8631-c8489f2588e8": {
        "type": "General Store",
        "name": "U2_KAMAL KIRANA",
        "route": "r4",
        "area": "MG Road",
        "address": "SAI KAMAL KIRANA Ramghat Road, Vishnupuri, Near water tank, sector 5C, Agra, UP"
      },
      "27984f4b-c701-4e30-a9a9-dc82984bf8db": {
        "type": "General Store",
        "name": "U1_JAI SANTOSI KIRANA",
        "route": "r6",
        "area": "Koramangla",
        "address": "RISHAV JAI SANTOSI KIRANA Ramghat Road, Vishnupuri, Near water tank, sector 5C, Agra, UP"
      },
      "bb76d3f8-d3c1-4d41-9cec-97d67cb8fa27": {
        "type": "General Store",
        "name": "U2_JAI SANTOSI KIRANA",
        "route": "r5",
        "area": "MG Road",
        "address": "RISHAV JAI SANTOSI KIRANA Ramghat Road, Vishnupuri, Near water tank, sector 5C, Agra, UP"
      },
      "fcef2851-2f10-47f8-a542-3de0f53d04f2": {
        "type": "General Store",
        "name": "U1_RAM JI LAL KIRANA",
        "route": "r4",
        "area": "MG Road",
        "address": "ravindra RAM JI LAL KIRANA Ramghat Road, Vishnupuri, Near water tank, sector 5C, Agra, UP"
      },
      "50128861-b12a-4881-b1bd-beec42fa0396": {
        "type": "General Store",
        "name": "U2_RAM JI LAL KIRANA",
        "route": "r5",
        "area": "Koramangla",
        "address": "ravindra RAM JI LAL KIRANA Ramghat Road, Vishnupuri, Near water tank, sector 5C, Agra, UP"
      },
      "080b6d99-455c-4042-9b99-50890f97e770": {
        "type": "General Store",
        "name": "U1_KAMAD GIRI  GENRAL",
        "route": "r2",
        "area": "Koramangla",
        "address": "MANISH KAMAD GIRI  GENRAL Ramghat Road, Vishnupuri, Near water tank, sector 5C, Agra, UP"
      },
      "8f4839fd-1ff0-4fc6-87ca-8f198d56a737": {
        "type": "General Store",
        "name": "U2_KAMAD GIRI  GENRAL",
        "route": "r4",
        "area": "MG Road",
        "address": "MANISH KAMAD GIRI  GENRAL Ramghat Road, Vishnupuri, Near water tank, sector 5C, Agra, UP"
      },
      "6bcab95c-f998-4d4d-b050-81cbaed76639": {
        "type": "General Store",
        "name": "U1_Parmar General",
        "route": "r4",
        "area": "HSR",
        "address": "DILIP KUMAR Parmar General Ramghat Road, Vishnupuri, Near water tank, sector 5C, Agra, UP"
      },
      "6420727b-4dd3-471d-9f31-f078e23fef35": {
        "type": "General Store",
        "name": "U2_Parmar General",
        "route": "r5",
        "area": "MG Road",
        "address": "DILIP KUMAR Parmar General Ramghat Road, Vishnupuri, Near water tank, sector 5C, Agra, UP"
      },
      "9dc54072-da87-408a-8670-317b15719de3": {
        "type": "General Store",
        "name": "U1_Shivam Genral",
        "route": "r2",
        "area": "HSR",
        "address": "HARIOM PRAZA PATI Shivam Genral Ramghat Road, Vishnupuri, Near water tank, sector 5C, Agra, UP"
      },
      "d780a279-c378-46dd-a12c-512fab69a5d4": {
        "type": "General Store",
        "name": "U2_Shivam Genral",
        "route": "r4",
        "area": "HSR",
        "address": "HARIOM PRAZA PATI Shivam Genral Ramghat Road, Vishnupuri, Near water tank, sector 5C, Agra, UP"
      },
      "4ac65cfe-8f13-48df-a8a9-c8389e480d5d": {
        "type": "General Store",
        "name": "U1_NEW SHAYM",
        "route": "r6",
        "area": "MG Road",
        "address": "hatke NEW SHAYM Ramghat Road, Vishnupuri, Near water tank, sector 5C, Agra, UP"
      },
      "366f0200-b4c6-469b-9a88-ed20f161d3e7": {
        "type": "General Store",
        "name": "U2_NEW SHAYM",
        "route": "r6",
        "area": "Koramangla",
        "address": "hatke NEW SHAYM Ramghat Road, Vishnupuri, Near water tank, sector 5C, Agra, UP"
      },
      "0d87133c-d7b6-4f2f-b9bd-5d2369d285c6": {
        "type": "General Store",
        "name": "U1_Krishna Genral",
        "route": "r3",
        "area": "MG Road",
        "address": "MANOJ AGARWAL Krishna Genral Ramghat Road, Vishnupuri, Near water tank, sector 5C, Agra, UP"
      },
      "4dc1c8d9-fe64-4951-aaa1-93412e24956e": {
        "type": "General Store",
        "name": "U2_Krishna Genral",
        "route": "r1",
        "area": "HSR",
        "address": "MANOJ AGARWAL Krishna Genral Ramghat Road, Vishnupuri, Near water tank, sector 5C, Agra, UP"
      },
      "a61faf09-e2f7-4781-a8d6-db302ce632a9": {
        "type": "General Store",
        "name": "U1_GIRESH KIRAN",
        "route": "r4",
        "area": "HSR",
        "address": "SHURUCHI GIRESH KIRAN Ramghat Road, Vishnupuri, Near water tank, sector 5C, Agra, UP"
      },
      "67b324e6-7ab1-4f1b-9f39-5a58052ed434": {
        "type": "General Store",
        "name": "U2_GIRESH KIRAN",
        "route": "r4",
        "area": "HSR",
        "address": "SHURUCHI GIRESH KIRAN Ramghat Road, Vishnupuri, Near water tank, sector 5C, Agra, UP"
      },
      "bec10011-9158-4a4c-9ffc-055a2b1e2976": {
        "type": "General Store",
        "name": "U1_PRABHU KRIPA",
        "route": "r4",
        "area": "MG Road",
        "address": "VIKASH PRABHU KRIPA Ramghat Road, Vishnupuri, Near water tank, sector 5C, Agra, UP"
      },
      "f16ef49e-b4ec-4e77-9a9b-5d615c995875": {
        "type": "General Store",
        "name": "U2_PRABHU KRIPA",
        "route": "r5",
        "area": "Koramangla",
        "address": "VIKASH PRABHU KRIPA Ramghat Road, Vishnupuri, Near water tank, sector 5C, Agra, UP"
      },
      "5aeb3532-e7fa-416e-84c7-f0da2ac5e2b9": {
        "type": "General Store",
        "name": "U1_GUPTA KIRANA",
        "route": "r3",
        "area": "HSR",
        "address": "Sobha Ram sahu GUPTA KIRANA Ramghat Road, Vishnupuri, Near water tank, sector 5C, Agra, UP"
      },
      "9d2f70e2-bcd6-4c2b-99f7-31cbf41ed3b8": {
        "type": "General Store",
        "name": "U2_GUPTA KIRANA",
        "route": "r3",
        "area": "MG Road",
        "address": "Sobha Ram sahu GUPTA KIRANA Ramghat Road, Vishnupuri, Near water tank, sector 5C, Agra, UP"
      },
      "da60aa84-4212-4b24-b06d-af93682e3691": {
        "type": "General Store",
        "name": "U1_PARAS GENERAL",
        "route": "r5",
        "area": "HSR",
        "address": "Sushi Agarwal PARAS GENERAL Ramghat Road, Vishnupuri, Near water tank, sector 5C, Agra, UP"
      },
      "885072af-aa05-464b-ad70-27b74fb434f0": {
        "type": "General Store",
        "name": "U2_PARAS GENERAL",
        "route": "r4",
        "area": "Koramangla",
        "address": "Sushi Agarwal PARAS GENERAL Ramghat Road, Vishnupuri, Near water tank, sector 5C, Agra, UP"
      },
      "23c245a4-8671-4c1d-a106-62e7e1f9d9f4": {
        "type": "General Store",
        "name": "U1_Kushwah Kirana",
        "route": "r5",
        "area": "HSR",
        "address": "Neme chandra Bhau Kushwah Kirana Ramghat Road, Vishnupuri, Near water tank, sector 5C, Agra, UP"
      },
      "81d61424-41d5-4069-93c4-b27fc8e9a257": {
        "type": "General Store",
        "name": "U2_Kushwah Kirana",
        "route": "r4",
        "area": "HSR",
        "address": "Neme chandra Bhau Kushwah Kirana Ramghat Road, Vishnupuri, Near water tank, sector 5C, Agra, UP"
      },
      "7529d958-3289-47dd-9f7e-97a32c691dd0": {
        "type": "General Store",
        "name": "U1_SHANKAR KIRANA",
        "route": "r6",
        "area": "MG Road",
        "address": "Rajendra Ramani SHANKAR KIRANA Ramghat Road, Vishnupuri, Near water tank, sector 5C, Agra, UP"
      },
      "c54e9de4-eb30-413f-adec-5d70a618784e": {
        "type": "General Store",
        "name": "U2_SHANKAR KIRANA",
        "route": "r1",
        "area": "MG Road",
        "address": "Rajendra Ramani SHANKAR KIRANA Ramghat Road, Vishnupuri, Near water tank, sector 5C, Agra, UP"
      },
      "7c447c04-31b5-4d82-bdd6-2eb0267f559e": {
        "type": "General Store",
        "name": "U1_Kirti Kirana",
        "route": "r2",
        "area": "Koramangla",
        "address": "Vishal Parashar Kirti Kirana Ramghat Road, Vishnupuri, Near water tank, sector 5C, Agra, UP"
      },
      "8357f942-6fa0-47ca-8148-39eb1a271e41": {
        "type": "General Store",
        "name": "U2_Kirti Kirana",
        "route": "r2",
        "area": "HSR",
        "address": "Vishal Parashar Kirti Kirana Ramghat Road, Vishnupuri, Near water tank, sector 5C, Agra, UP"
      },
      "7248bcc2-1320-43bc-8289-b43d04e244af": {
        "type": "General Store",
        "name": "U1_ARUN GANREL",
        "route": "r5",
        "area": "Koramangla",
        "address": "Sonu Lodi ARUN GANREL Ramghat Road, Vishnupuri, Near water tank, sector 5C, Agra, UP"
      },
      "cd58b08f-931c-4166-8309-a9b2bf9225b1": {
        "type": "General Store",
        "name": "U2_ARUN GANREL",
        "route": "r3",
        "area": "HSR",
        "address": "Sonu Lodi ARUN GANREL Ramghat Road, Vishnupuri, Near water tank, sector 5C, Agra, UP"
      },
      "c80c6195-732c-428d-abe3-911ae7d12e93": {
        "type": "General Store",
        "name": "U1_GWALIOR SHOPING",
        "route": "r1",
        "area": "MG Road",
        "address": "Ramesh kirana GWALIOR SHOPING Ramghat Road, Vishnupuri, Near water tank, sector 5C, Agra, UP"
      },
      "c7dcb928-1023-4c51-9fcf-a742acd846c1": {
        "type": "General Store",
        "name": "U2_GWALIOR SHOPING",
        "route": "r6",
        "area": "HSR",
        "address": "Ramesh kirana GWALIOR SHOPING Ramghat Road, Vishnupuri, Near water tank, sector 5C, Agra, UP"
      },
      "557233a4-5719-4488-a151-95b59caaa0af": {
        "type": "General Store",
        "name": "U1_SHREE MAHAVEER CORNER",
        "route": "r5",
        "area": "HSR",
        "address": "Rajkumar Kushwah SHREE MAHAVEER CORNER Ramghat Road, Vishnupuri, Near water tank, sector 5C, Agra, UP"
      },
      "6ab6949f-9973-42f8-aff2-f8bfed1ff2d0": {
        "type": "General Store",
        "name": "U2_SHREE MAHAVEER CORNER",
        "route": "r3",
        "area": "MG Road",
        "address": "Rajkumar Kushwah SHREE MAHAVEER CORNER Ramghat Road, Vishnupuri, Near water tank, sector 5C, Agra, UP"
      },
      "cc38ee84-67ac-4794-8b43-9c5547a94b8e": {
        "type": "General Store",
        "name": "U1_PREAM KIRANA",
        "route": "r5",
        "area": "MG Road",
        "address": "RAM PREAM KIRANA Ramghat Road, Vishnupuri, Near water tank, sector 5C, Agra, UP"
      },
      "7cc63730-06c6-4992-8b50-707c774b6442": {
        "type": "General Store",
        "name": "U2_PREAM KIRANA",
        "route": "r3",
        "area": "MG Road",
        "address": "RAM PREAM KIRANA Ramghat Road, Vishnupuri, Near water tank, sector 5C, Agra, UP"
      },
      "13599bf7-b0d6-4f96-b231-a16820b32cca": {
        "type": "General Store",
        "name": "U1_JAIN GENRAL",
        "route": "r5",
        "area": "Koramangla",
        "address": "Sanjay Jain JAIN GENRAL Ramghat Road, Vishnupuri, Near water tank, sector 5C, Agra, UP"
      },
      "4c1ef282-4a5b-46e3-b22f-4a2d7d45f051": {
        "type": "General Store",
        "name": "U2_JAIN GENRAL",
        "route": "r3",
        "area": "Koramangla",
        "address": "Sanjay Jain JAIN GENRAL Ramghat Road, Vishnupuri, Near water tank, sector 5C, Agra, UP"
      },
      "52613e84-221d-461c-95b6-851daf509739": {
        "type": "General Store",
        "name": "U1_SAGAR KIRANA",
        "route": "r2",
        "area": "MG Road",
        "address": "Manish Jain SAGAR KIRANA Ramghat Road, Vishnupuri, Near water tank, sector 5C, Agra, UP"
      },
      "d97842ea-5485-4c5e-98f2-4a920576753a": {
        "type": "General Store",
        "name": "U2_SAGAR KIRANA",
        "route": "r5",
        "area": "HSR",
        "address": "Manish Jain SAGAR KIRANA Ramghat Road, Vishnupuri, Near water tank, sector 5C, Agra, UP"
      },
      "6142dd7c-9ad3-4364-afa5-a9e1ee5da391": {
        "type": "General Store",
        "name": "U1_GUDDI KIRANA",
        "route": "r6",
        "area": "HSR",
        "address": "DADI GUDDI KIRANA Ramghat Road, Vishnupuri, Near water tank, sector 5C, Agra, UP"
      },
      "699dca03-18c3-4974-ab30-e32ebe04c8a2": {
        "type": "General Store",
        "name": "U2_GUDDI KIRANA",
        "route": "r5",
        "area": "Koramangla",
        "address": "DADI GUDDI KIRANA Ramghat Road, Vishnupuri, Near water tank, sector 5C, Agra, UP"
      },
      "066e6547-fa22-48c5-b339-129b71be5a45": {
        "type": "General Store",
        "name": "U1_BHAVANI NOVELTY",
        "route": "r5",
        "area": "MG Road",
        "address": "Kamal Chorasiya BHAVANI NOVELTY Ramghat Road, Vishnupuri, Near water tank, sector 5C, Agra, UP"
      },
      "d93930ae-0ffd-43e9-ac70-40a0168b1998": {
        "type": "General Store",
        "name": "U2_BHAVANI NOVELTY",
        "route": "r1",
        "area": "MG Road",
        "address": "Kamal Chorasiya BHAVANI NOVELTY Ramghat Road, Vishnupuri, Near water tank, sector 5C, Agra, UP"
      },
      "2e79d25a-d8fe-41ca-923e-c3e2c292ebc5": {
        "type": "General Store",
        "name": "U1_GIRIRAJ KIRANA",
        "route": "r5",
        "area": "MG Road",
        "address": "PEADEEP SAHU GIRIRAJ KIRANA Ramghat Road, Vishnupuri, Near water tank, sector 5C, Agra, UP"
      },
      "3fd3a6d5-e118-4f12-8e52-2a5fb78b9dc2": {
        "type": "General Store",
        "name": "U2_GIRIRAJ KIRANA",
        "route": "r3",
        "area": "Koramangla",
        "address": "PEADEEP SAHU GIRIRAJ KIRANA Ramghat Road, Vishnupuri, Near water tank, sector 5C, Agra, UP"
      },
      "387f6727-d6be-408a-b7bd-15466b7e17e9": {
        "type": "General Store",
        "name": "U1_SHREE KRISHNA BALRAM STORES",
        "route": "r5",
        "area": "Koramangla",
        "address": "JAIN SHREE KRISHNA BALRAM STORES Ramghat Road, Vishnupuri, Near water tank, sector 5C, Agra, UP"
      },
      "8e05974f-0207-4a19-a38e-94f7bd3d138f": {
        "type": "General Store",
        "name": "U2_SHREE KRISHNA BALRAM STORES",
        "route": "r1",
        "area": "Koramangla",
        "address": "JAIN SHREE KRISHNA BALRAM STORES Ramghat Road, Vishnupuri, Near water tank, sector 5C, Agra, UP"
      },
      "929a3991-67ce-4f10-afb1-2cd45373f4d7": {
        "type": "General Store",
        "name": "U1_RINKU KIRANA",
        "route": "r3",
        "area": "MG Road",
        "address": "Hemant Neema RINKU KIRANA Ramghat Road, Vishnupuri, Near water tank, sector 5C, Agra, UP"
      },
      "94006e91-167b-42f3-a8af-2ed1e0b0fdee": {
        "type": "General Store",
        "name": "U2_RINKU KIRANA",
        "route": "r2",
        "area": "MG Road",
        "address": "Hemant Neema RINKU KIRANA Ramghat Road, Vishnupuri, Near water tank, sector 5C, Agra, UP"
      },
      "5f7b6b53-8114-468a-9ca7-79d463cf0cbe": {
        "type": "General Store",
        "name": "U1_VANSH KIRANA",
        "route": "r4",
        "area": "MG Road",
        "address": "Harish Bhau VANSH KIRANA Ramghat Road, Vishnupuri, Near water tank, sector 5C, Agra, UP"
      },
      "8c48544b-745a-4337-b309-52529330cb6c": {
        "type": "General Store",
        "name": "U2_VANSH KIRANA",
        "route": "r3",
        "area": "HSR",
        "address": "Harish Bhau VANSH KIRANA Ramghat Road, Vishnupuri, Near water tank, sector 5C, Agra, UP"
      },
      "8e024f8f-6907-445f-a5fc-b0e711d352ea": {
        "type": "General Store",
        "name": "U1_M.D AND SONS",
        "route": "r3",
        "area": "MG Road",
        "address": "Pintu M.D AND SONS Ramghat Road, Vishnupuri, Near water tank, sector 5C, Agra, UP"
      },
      "801081d7-9be0-44d0-bf7b-b0af0ef0af6e": {
        "type": "General Store",
        "name": "U2_M.D AND SONS",
        "route": "r1",
        "area": "MG Road",
        "address": "Pintu M.D AND SONS Ramghat Road, Vishnupuri, Near water tank, sector 5C, Agra, UP"
      },
      "fa6358ce-e04d-4083-a447-d9f947f842c0": {
        "type": "General Store",
        "name": "U1_ADESH GENRAL",
        "route": "r1",
        "area": "Koramangla",
        "address": "Vikas Jain ADESH GENRAL Ramghat Road, Vishnupuri, Near water tank, sector 5C, Agra, UP"
      },
      "462560e2-6559-476c-b607-29fbbb3c9d5f": {
        "type": "General Store",
        "name": "U2_ADESH GENRAL",
        "route": "r3",
        "area": "HSR",
        "address": "Vikas Jain ADESH GENRAL Ramghat Road, Vishnupuri, Near water tank, sector 5C, Agra, UP"
      },
      "925442c8-dbd2-4132-ad8d-a78f792deb16": {
        "type": "General Store",
        "name": "U1_AGRWAL GENRAL",
        "route": "r2",
        "area": "Koramangla",
        "address": "Golu Chokse AGRWAL GENRAL Ramghat Road, Vishnupuri, Near water tank, sector 5C, Agra, UP"
      },
      "7f5141cf-66f5-4ee4-9933-6a5827bb0515": {
        "type": "General Store",
        "name": "U2_AGRWAL GENRAL",
        "route": "r6",
        "area": "HSR",
        "address": "Golu Chokse AGRWAL GENRAL Ramghat Road, Vishnupuri, Near water tank, sector 5C, Agra, UP"
      },
      "6f27d70f-b2ab-4528-b45b-b704133f8efa": {
        "type": "General Store",
        "name": "U1_SONI KIRANA",
        "route": "r3",
        "area": "Koramangla",
        "address": "Nemichand Jain SONI KIRANA Ramghat Road, Vishnupuri, Near water tank, sector 5C, Agra, UP"
      },
      "846087b0-7c60-4fed-921e-36981931294b": {
        "type": "General Store",
        "name": "U2_SONI KIRANA",
        "route": "r2",
        "area": "HSR",
        "address": "Nemichand Jain SONI KIRANA Ramghat Road, Vishnupuri, Near water tank, sector 5C, Agra, UP"
      },
      "a0b87e38-52ce-43df-a79f-5eeb347ce198": {
        "type": "General Store",
        "name": "U1_MANGAL PROVISION",
        "route": "r2",
        "area": "MG Road",
        "address": "Deepak MANGAL PROVISION Ramghat Road, Vishnupuri, Near water tank, sector 5C, Agra, UP"
      },
      "24331969-2430-4191-a296-1f34bb4c3a0a": {
        "type": "General Store",
        "name": "U2_MANGAL PROVISION",
        "route": "r2",
        "area": "Koramangla",
        "address": "Deepak MANGAL PROVISION Ramghat Road, Vishnupuri, Near water tank, sector 5C, Agra, UP"
      },
      "6ee0b67c-12c2-42a7-9a98-f93acae6f59e": {
        "type": "General Store",
        "name": "U1_BALAJI GANREL",
        "route": "r1",
        "area": "MG Road",
        "address": "RAVI BALAJI GANREL Ramghat Road, Vishnupuri, Near water tank, sector 5C, Agra, UP"
      },
      "e184a623-8bca-40a6-8baa-045be20f1047": {
        "type": "General Store",
        "name": "U2_BALAJI GANREL",
        "route": "r1",
        "area": "Koramangla",
        "address": "RAVI BALAJI GANREL Ramghat Road, Vishnupuri, Near water tank, sector 5C, Agra, UP"
      },
      "08ab3fab-d31b-488c-b330-06647002a49d": {
        "type": "General Store",
        "name": "U1_JAI BABA KIRANA.",
        "route": "r2",
        "area": "Koramangla",
        "address": "SAHU JAI BABA KIRANA. Ramghat Road, Vishnupuri, Near water tank, sector 5C, Agra, UP"
      },
      "18f21262-e725-44c2-b780-58240e0a6d3e": {
        "type": "General Store",
        "name": "U2_JAI BABA KIRANA.",
        "route": "r2",
        "area": "Koramangla",
        "address": "SAHU JAI BABA KIRANA. Ramghat Road, Vishnupuri, Near water tank, sector 5C, Agra, UP"
      },
      "2be84d4f-f684-4fa5-957d-84bb8315dbf3": {
        "type": "General Store",
        "name": "U1_VISHAL KIRANA",
        "route": "r6",
        "area": "MG Road",
        "address": "Amjad Khan VISHAL KIRANA Ramghat Road, Vishnupuri, Near water tank, sector 5C, Agra, UP"
      },
      "330af48d-b2ff-4f59-ac75-53a5a744a020": {
        "type": "General Store",
        "name": "U2_VISHAL KIRANA",
        "route": "r5",
        "area": "HSR",
        "address": "Amjad Khan VISHAL KIRANA Ramghat Road, Vishnupuri, Near water tank, sector 5C, Agra, UP"
      },
      "d2f20216-f634-4a2a-b88a-53a2576510d9": {
        "type": "General Store",
        "name": "U1_KHANDELWAL AND BROTHERS",
        "route": "r2",
        "area": "Koramangla",
        "address": "Dinesh Dubey KHANDELWAL AND BROTHERS Ramghat Road, Vishnupuri, Near water tank, sector 5C, Agra, UP"
      },
      "3d3413ff-9dfb-48d4-9f91-869754845e80": {
        "type": "General Store",
        "name": "U2_KHANDELWAL AND BROTHERS",
        "route": "r5",
        "area": "Koramangla",
        "address": "Dinesh Dubey KHANDELWAL AND BROTHERS Ramghat Road, Vishnupuri, Near water tank, sector 5C, Agra, UP"
      },
      "67359f68-71a5-4f70-9efa-80fe8ec302ed": {
        "type": "General Store",
        "name": "U1_KUSHAWAH GENRAL",
        "route": "r2",
        "area": "HSR",
        "address": "SHIVAM KUSHAWAH GENRAL Ramghat Road, Vishnupuri, Near water tank, sector 5C, Agra, UP"
      },
      "c89e31b3-3477-4dbd-94d8-22f4fbdf6edc": {
        "type": "General Store",
        "name": "U2_KUSHAWAH GENRAL",
        "route": "r2",
        "area": "MG Road",
        "address": "SHIVAM KUSHAWAH GENRAL Ramghat Road, Vishnupuri, Near water tank, sector 5C, Agra, UP"
      },
      "c484671e-3c26-4e95-bc0e-5bb1ce0de4a2": {
        "type": "General Store",
        "name": "U1_ADARH KIRANA",
        "route": "r2",
        "area": "MG Road",
        "address": "Ritu Panjabi ADARH KIRANA Ramghat Road, Vishnupuri, Near water tank, sector 5C, Agra, UP"
      },
      "55ce02b7-291c-43fb-ad36-758f9609d480": {
        "type": "General Store",
        "name": "U2_ADARH KIRANA",
        "route": "r2",
        "area": "HSR",
        "address": "Ritu Panjabi ADARH KIRANA Ramghat Road, Vishnupuri, Near water tank, sector 5C, Agra, UP"
      },
      "bd0df728-1c22-499d-a87e-7eabdc33706e": {
        "type": "General Store",
        "name": "U1_CHABILE KIRANA",
        "route": "r1",
        "area": "MG Road",
        "address": "MANOJ CHABILE KIRANA Ramghat Road, Vishnupuri, Near water tank, sector 5C, Agra, UP"
      },
      "93fb6821-5c4d-4b7c-b796-3320a2c2172d": {
        "type": "General Store",
        "name": "U2_CHABILE KIRANA",
        "route": "r1",
        "area": "MG Road",
        "address": "MANOJ CHABILE KIRANA Ramghat Road, Vishnupuri, Near water tank, sector 5C, Agra, UP"
      },
      "a0d1cf62-308b-4d75-9d3e-5b4e6813a68a": {
        "type": "General Store",
        "name": "U1_MAA COLLECTION",
        "route": "r5",
        "area": "Koramangla",
        "address": "RAJIV MAA COLLECTION Ramghat Road, Vishnupuri, Near water tank, sector 5C, Agra, UP"
      },
      "b0818b3c-78c3-4a25-80f6-dbaf42e69394": {
        "type": "General Store",
        "name": "U2_MAA COLLECTION",
        "route": "r5",
        "area": "Koramangla",
        "address": "RAJIV MAA COLLECTION Ramghat Road, Vishnupuri, Near water tank, sector 5C, Agra, UP"
      },
      "1a696a45-8997-4ece-885b-2963c1fdecf6": {
        "type": "General Store",
        "name": "U1_QUALITY DIPARTMENT",
        "route": "r2",
        "area": "HSR",
        "address": "VINAY JAIN QUALITY DIPARTMENT Ramghat Road, Vishnupuri, Near water tank, sector 5C, Agra, UP"
      },
      "d025ae17-9c02-4c3c-815c-7c9a2e2e5ece": {
        "type": "General Store",
        "name": "U2_QUALITY DIPARTMENT",
        "route": "r4",
        "area": "HSR",
        "address": "VINAY JAIN QUALITY DIPARTMENT Ramghat Road, Vishnupuri, Near water tank, sector 5C, Agra, UP"
      },
      "964a6a32-9a1c-40fc-9944-10707cb1fa98": {
        "type": "General Store",
        "name": "U1_Hema Genral",
        "route": "r1",
        "area": "HSR",
        "address": "Pramod kumar Mathur Hema Genral Ramghat Road, Vishnupuri, Near water tank, sector 5C, Agra, UP"
      },
      "020c8953-6509-4e35-b342-f05fe70ada7f": {
        "type": "General Store",
        "name": "U2_Hema Genral",
        "route": "r6",
        "area": "MG Road",
        "address": "Pramod kumar Mathur Hema Genral Ramghat Road, Vishnupuri, Near water tank, sector 5C, Agra, UP"
      },
      "535c28aa-0233-4d33-8bbb-d5682174a9e6": {
        "type": "General Store",
        "name": "U1_BALAJI PROVISION STORE",
        "route": "r1",
        "area": "Koramangla",
        "address": "Chintu Badkur BALAJI PROVISION STORE Ramghat Road, Vishnupuri, Near water tank, sector 5C, Agra, UP"
      },
      "b9b59ef2-ae6b-4d5c-ac53-7532d6eecb73": {
        "type": "General Store",
        "name": "U2_BALAJI PROVISION STORE",
        "route": "r5",
        "area": "HSR",
        "address": "Chintu Badkur BALAJI PROVISION STORE Ramghat Road, Vishnupuri, Near water tank, sector 5C, Agra, UP"
      },
      "8cc4a45c-be8f-4c7d-b73c-4311ff456a26": {
        "type": "General Store",
        "name": "U1_KRISHNA GENERAL",
        "route": "r6",
        "area": "Koramangla",
        "address": "Dipesh Verma KRISHNA GENERAL Ramghat Road, Vishnupuri, Near water tank, sector 5C, Agra, UP"
      },
      "e87d3147-04a8-4f15-9438-22781ebf46d1": {
        "type": "General Store",
        "name": "U2_KRISHNA GENERAL",
        "route": "r4",
        "area": "HSR",
        "address": "Dipesh Verma KRISHNA GENERAL Ramghat Road, Vishnupuri, Near water tank, sector 5C, Agra, UP"
      },
      "c24118e1-f543-4f5c-b17e-922628f61e9b": {
        "type": "General Store",
        "name": "U1_RAKESH KIRANA",
        "route": "r3",
        "area": "MG Road",
        "address": "Santosh Sahu RAKESH KIRANA Ramghat Road, Vishnupuri, Near water tank, sector 5C, Agra, UP"
      },
      "4c131ec6-f534-4a7b-b6f4-d68a6a4e1a00": {
        "type": "General Store",
        "name": "U2_RAKESH KIRANA",
        "route": "r3",
        "area": "Koramangla",
        "address": "Santosh Sahu RAKESH KIRANA Ramghat Road, Vishnupuri, Near water tank, sector 5C, Agra, UP"
      },
      "c23b5d33-d7b2-4cb2-aa53-7e7f16954c43": {
        "type": "General Store",
        "name": "U1_GAJENDRA KIRANA",
        "route": "r3",
        "area": "Koramangla",
        "address": "Vishal Parashar GAJENDRA KIRANA Ramghat Road, Vishnupuri, Near water tank, sector 5C, Agra, UP"
      },
      "2f6de435-b530-4621-88e5-fc7aba83671b": {
        "type": "General Store",
        "name": "U2_GAJENDRA KIRANA",
        "route": "r2",
        "area": "HSR",
        "address": "Vishal Parashar GAJENDRA KIRANA Ramghat Road, Vishnupuri, Near water tank, sector 5C, Agra, UP"
      },
      "0d493187-3acb-4a3e-b098-cc94062e879b": {
        "type": "General Store",
        "name": "U1_NAVIN KIRANA",
        "route": "r3",
        "area": "HSR",
        "address": "PRAMOD NAVIN KIRANA Ramghat Road, Vishnupuri, Near water tank, sector 5C, Agra, UP"
      },
      "3dd562f8-816d-49b3-b242-8799f6c86f65": {
        "type": "General Store",
        "name": "U2_NAVIN KIRANA",
        "route": "r1",
        "area": "MG Road",
        "address": "PRAMOD NAVIN KIRANA Ramghat Road, Vishnupuri, Near water tank, sector 5C, Agra, UP"
      },
      "c71668db-3381-402b-b96f-8d8fe37a2684": {
        "type": "General Store",
        "name": "U1_S K GENERAL",
        "route": "r4",
        "area": "Koramangla",
        "address": "RAM S K GENERAL Ramghat Road, Vishnupuri, Near water tank, sector 5C, Agra, UP"
      },
      "52955997-bf6c-4bf5-abe7-3feb1de37031": {
        "type": "General Store",
        "name": "U2_S K GENERAL",
        "route": "r3",
        "area": "MG Road",
        "address": "RAM S K GENERAL Ramghat Road, Vishnupuri, Near water tank, sector 5C, Agra, UP"
      },
      "5251da33-2d43-4054-9e9b-50cf5a8f0192": {
        "type": "General Store",
        "name": "U1_PRAKASH GANREL.",
        "route": "r1",
        "area": "HSR",
        "address": "Uday Agrawal PRAKASH GANREL. Ramghat Road, Vishnupuri, Near water tank, sector 5C, Agra, UP"
      },
      "0005b22a-6bb9-415f-ad0f-b4b2098b2f90": {
        "type": "General Store",
        "name": "U2_PRAKASH GANREL.",
        "route": "r3",
        "area": "Koramangla",
        "address": "Uday Agrawal PRAKASH GANREL. Ramghat Road, Vishnupuri, Near water tank, sector 5C, Agra, UP"
      },
      "2ab26e4a-2368-4993-b66f-4e0b956fac7c": {
        "type": "General Store",
        "name": "U1_SHIV SHKTI GENRAL.",
        "route": "r1",
        "area": "Koramangla",
        "address": "Amit Jain SHIV SHKTI GENRAL. Ramghat Road, Vishnupuri, Near water tank, sector 5C, Agra, UP"
      },
      "fa4dee9d-b2b7-415f-aa25-887c930a73da": {
        "type": "General Store",
        "name": "U2_SHIV SHKTI GENRAL.",
        "route": "r4",
        "area": "HSR",
        "address": "Amit Jain SHIV SHKTI GENRAL. Ramghat Road, Vishnupuri, Near water tank, sector 5C, Agra, UP"
      },
      "6daa038f-d644-4537-a7f3-4ac4b0f4b9cb": {
        "type": "General Store",
        "name": "U1_SETHANI KIRANA",
        "route": "r2",
        "area": "Koramangla",
        "address": "MAHESH SETHANI KIRANA Ramghat Road, Vishnupuri, Near water tank, sector 5C, Agra, UP"
      },
      "8decb2c6-f93c-42eb-8148-66076a6d973d": {
        "type": "General Store",
        "name": "U2_SETHANI KIRANA",
        "route": "r1",
        "area": "HSR",
        "address": "MAHESH SETHANI KIRANA Ramghat Road, Vishnupuri, Near water tank, sector 5C, Agra, UP"
      },
      "b1159843-6009-488f-8fe7-5c36926bc348": {
        "type": "General Store",
        "name": "U1_Mahalaxmi Sales",
        "route": "r6",
        "area": "Koramangla",
        "address": "ARUN KUSHWAH Mahalaxmi Sales Ramghat Road, Vishnupuri, Near water tank, sector 5C, Agra, UP"
      },
      "d6c818c9-1023-4259-8d58-4c97bf9fef0d": {
        "type": "General Store",
        "name": "U2_Mahalaxmi Sales",
        "route": "r3",
        "area": "MG Road",
        "address": "ARUN KUSHWAH Mahalaxmi Sales Ramghat Road, Vishnupuri, Near water tank, sector 5C, Agra, UP"
      },
      "69ecdbaf-2fcc-4d78-9d01-d334b9857523": {
        "type": "General Store",
        "name": "U1_YUG KIRANA",
        "route": "r6",
        "area": "Koramangla",
        "address": "VINOD KUMAR JAIN YUG KIRANA Ramghat Road, Vishnupuri, Near water tank, sector 5C, Agra, UP"
      },
      "d9645e65-fb32-45b4-a2b4-327ad228f7a1": {
        "type": "General Store",
        "name": "U2_YUG KIRANA",
        "route": "r6",
        "area": "HSR",
        "address": "VINOD KUMAR JAIN YUG KIRANA Ramghat Road, Vishnupuri, Near water tank, sector 5C, Agra, UP"
      },
      "41937c0c-7124-49c1-beab-263fd161780f": {
        "type": "General Store",
        "name": "U1_RAJPUT KIRANA",
        "route": "r6",
        "area": "Koramangla",
        "address": "SHUBHAM RAJPUT KIRANA Ramghat Road, Vishnupuri, Near water tank, sector 5C, Agra, UP"
      },
      "77b434c3-87f9-4f7c-8828-f68e5321a3af": {
        "type": "General Store",
        "name": "U2_RAJPUT KIRANA",
        "route": "r2",
        "area": "Koramangla",
        "address": "SHUBHAM RAJPUT KIRANA Ramghat Road, Vishnupuri, Near water tank, sector 5C, Agra, UP"
      },
      "1b52cff3-ee12-4772-b0c8-66b848d602fc": {
        "type": "General Store",
        "name": "U1_Suresh Provision",
        "route": "r2",
        "area": "MG Road",
        "address": "Akash Suresh Provision Ramghat Road, Vishnupuri, Near water tank, sector 5C, Agra, UP"
      },
      "8a907cca-7862-4e0c-b4c4-133e1f7d3994": {
        "type": "General Store",
        "name": "U2_Suresh Provision",
        "route": "r4",
        "area": "Koramangla",
        "address": "Akash Suresh Provision Ramghat Road, Vishnupuri, Near water tank, sector 5C, Agra, UP"
      },
      "977a6f55-7b30-4318-a974-d6e5b0a5d926": {
        "type": "General Store",
        "name": "U1_Maa Laxmi General",
        "route": "r4",
        "area": "MG Road",
        "address": "Sorabh Maa Laxmi General Ramghat Road, Vishnupuri, Near water tank, sector 5C, Agra, UP"
      },
      "df455afa-b17a-4d50-b6c5-d925f9e899ab": {
        "type": "General Store",
        "name": "U2_Maa Laxmi General",
        "route": "r4",
        "area": "Koramangla",
        "address": "Sorabh Maa Laxmi General Ramghat Road, Vishnupuri, Near water tank, sector 5C, Agra, UP"
      },
      "8ad47e0f-719f-4620-95d5-1a027292a849": {
        "type": "General Store",
        "name": "U1_Raju Kirana Store",
        "route": "r2",
        "area": "HSR",
        "address": "Hasib Khan Raju Kirana Store Ramghat Road, Vishnupuri, Near water tank, sector 5C, Agra, UP"
      },
      "0f1fc72e-d567-44cb-9897-6cb588db4491": {
        "type": "General Store",
        "name": "U2_Raju Kirana Store",
        "route": "r3",
        "area": "HSR",
        "address": "Hasib Khan Raju Kirana Store Ramghat Road, Vishnupuri, Near water tank, sector 5C, Agra, UP"
      },
      "004d39b7-e35a-4d08-986f-2664c429e3b2": {
        "type": "General Store",
        "name": "U1_BHUMI KIRANA",
        "route": "r5",
        "area": "HSR",
        "address": "Nilesh Jain BHUMI KIRANA Ramghat Road, Vishnupuri, Near water tank, sector 5C, Agra, UP"
      },
      "43d4d8a0-e27a-4f71-b980-8cf66816cf29": {
        "type": "General Store",
        "name": "U2_BHUMI KIRANA",
        "route": "r3",
        "area": "MG Road",
        "address": "Nilesh Jain BHUMI KIRANA Ramghat Road, Vishnupuri, Near water tank, sector 5C, Agra, UP"
      },
      "065e6e5c-534f-4b94-9599-c4af303aeec9": {
        "type": "General Store",
        "name": "U1_MANOJ GENRAL",
        "route": "r6",
        "area": "MG Road",
        "address": "Santosh Kushwah MANOJ GENRAL Ramghat Road, Vishnupuri, Near water tank, sector 5C, Agra, UP"
      },
      "f6b15fee-f69c-4879-8359-5f28c4f65210": {
        "type": "General Store",
        "name": "U2_MANOJ GENRAL",
        "route": "r4",
        "area": "Koramangla",
        "address": "Santosh Kushwah MANOJ GENRAL Ramghat Road, Vishnupuri, Near water tank, sector 5C, Agra, UP"
      },
      "ff8f1463-4a01-47be-bc39-825778411720": {
        "type": "General Store",
        "name": "U1_BHAGAT JI KIRANA",
        "route": "r5",
        "area": "MG Road",
        "address": "PRAMOD BHAGAT JI KIRANA Ramghat Road, Vishnupuri, Near water tank, sector 5C, Agra, UP"
      },
      "a852ba2f-5eec-4337-a885-5a6b0ef5f359": {
        "type": "General Store",
        "name": "U2_BHAGAT JI KIRANA",
        "route": "r6",
        "area": "Koramangla",
        "address": "PRAMOD BHAGAT JI KIRANA Ramghat Road, Vishnupuri, Near water tank, sector 5C, Agra, UP"
      },
      "439a954d-9e99-4141-b580-1c118d47e7fd": {
        "type": "General Store",
        "name": "U1_SATGURU STORE",
        "route": "r6",
        "area": "HSR",
        "address": "RAM SATGURU STORE Ramghat Road, Vishnupuri, Near water tank, sector 5C, Agra, UP"
      },
      "2eea2cfa-55d7-453a-b92a-2cf6ccf0e500": {
        "type": "General Store",
        "name": "U2_SATGURU STORE",
        "route": "r2",
        "area": "Koramangla",
        "address": "RAM SATGURU STORE Ramghat Road, Vishnupuri, Near water tank, sector 5C, Agra, UP"
      },
      "6660ca12-29a4-4664-a54e-cbede659a2a5": {
        "type": "General Store",
        "name": "U1_Ritik Provision",
        "route": "r4",
        "area": "HSR",
        "address": "RAM Ritik Provision Ramghat Road, Vishnupuri, Near water tank, sector 5C, Agra, UP"
      },
      "08194563-4a73-4c1b-ae28-d8cdaaff1613": {
        "type": "General Store",
        "name": "U2_Ritik Provision",
        "route": "r3",
        "area": "MG Road",
        "address": "RAM Ritik Provision Ramghat Road, Vishnupuri, Near water tank, sector 5C, Agra, UP"
      },
      "2027f353-1c01-4bed-a28c-ee8d0935365f": {
        "type": "General Store",
        "name": "U1_MAHA DEV GENERAL",
        "route": "r2",
        "area": "HSR",
        "address": "Manoj Kushwah MAHA DEV GENERAL Ramghat Road, Vishnupuri, Near water tank, sector 5C, Agra, UP"
      },
      "ecfdf133-6fc0-4218-8100-0c5e5bb5ac30": {
        "type": "General Store",
        "name": "U2_MAHA DEV GENERAL",
        "route": "r1",
        "area": "HSR",
        "address": "Manoj Kushwah MAHA DEV GENERAL Ramghat Road, Vishnupuri, Near water tank, sector 5C, Agra, UP"
      },
      "c368def5-892e-4c92-acb8-b74744190f0f": {
        "type": "General Store",
        "name": "U1_RAHUL GENARAL",
        "route": "r6",
        "area": "HSR",
        "address": "Rakesh RAHUL GENARAL Ramghat Road, Vishnupuri, Near water tank, sector 5C, Agra, UP"
      },
      "bda8c698-4aa6-468a-a5c9-08d751e1e68a": {
        "type": "General Store",
        "name": "U2_RAHUL GENARAL",
        "route": "r6",
        "area": "HSR",
        "address": "Rakesh RAHUL GENARAL Ramghat Road, Vishnupuri, Near water tank, sector 5C, Agra, UP"
      },
      "d6bc9f4c-82d8-4b42-b2dd-7a64982a4053": {
        "type": "General Store",
        "name": "U1_Maa Kripa General",
        "route": "r2",
        "area": "MG Road",
        "address": "SANTSH NEEMA Maa Kripa General Ramghat Road, Vishnupuri, Near water tank, sector 5C, Agra, UP"
      },
      "f7913501-7fe4-4b3b-8ef6-53da3df8d004": {
        "type": "General Store",
        "name": "U2_Maa Kripa General",
        "route": "r4",
        "area": "MG Road",
        "address": "SANTSH NEEMA Maa Kripa General Ramghat Road, Vishnupuri, Near water tank, sector 5C, Agra, UP"
      },
      "989b778a-df1c-40a5-ab75-70efa48d8987": {
        "type": "General Store",
        "name": "U1_NEW BABA GENERAL STORE",
        "route": "r4",
        "area": "Koramangla",
        "address": "Brijesh Sahu NEW BABA GENERAL STORE Ramghat Road, Vishnupuri, Near water tank, sector 5C, Agra, UP"
      },
      "8ef87ea5-d19a-466a-9e19-121caeb27df7": {
        "type": "General Store",
        "name": "U2_NEW BABA GENERAL STORE",
        "route": "r5",
        "area": "HSR",
        "address": "Brijesh Sahu NEW BABA GENERAL STORE Ramghat Road, Vishnupuri, Near water tank, sector 5C, Agra, UP"
      },
      "01bf27a8-ae9c-4863-ab52-c5c259a21514": {
        "type": "General Store",
        "name": "U1_SHRI JI STORE",
        "route": "r4",
        "area": "Koramangla",
        "address": "Lalit Gupta SHRI JI STORE Ramghat Road, Vishnupuri, Near water tank, sector 5C, Agra, UP"
      },
      "fde542e5-4496-47ea-9cc9-f028e604871a": {
        "type": "General Store",
        "name": "U2_SHRI JI STORE",
        "route": "r6",
        "area": "MG Road",
        "address": "Lalit Gupta SHRI JI STORE Ramghat Road, Vishnupuri, Near water tank, sector 5C, Agra, UP"
      },
      "689d88e0-9173-4d4c-b00e-62aa8d69bf3a": {
        "type": "General Store",
        "name": "U1_KAMAL STORE",
        "route": "r4",
        "area": "Koramangla",
        "address": "Girish Bhargav KAMAL STORE Ramghat Road, Vishnupuri, Near water tank, sector 5C, Agra, UP"
      },
      "a5ebed41-5909-4377-ad0a-750bd1dea7f2": {
        "type": "General Store",
        "name": "U2_KAMAL STORE",
        "route": "r5",
        "area": "Koramangla",
        "address": "Girish Bhargav KAMAL STORE Ramghat Road, Vishnupuri, Near water tank, sector 5C, Agra, UP"
      },
      "b72aa2a3-d879-47f7-8a9b-814e62ed1186": {
        "type": "General Store",
        "name": "U1_GURUNANAK STORE",
        "route": "r2",
        "area": "MG Road",
        "address": "Virendra Rajput GURUNANAK STORE Ramghat Road, Vishnupuri, Near water tank, sector 5C, Agra, UP"
      },
      "9b0abea2-f095-4264-b270-ec66433cde23": {
        "type": "General Store",
        "name": "U2_GURUNANAK STORE",
        "route": "r5",
        "area": "MG Road",
        "address": "Virendra Rajput GURUNANAK STORE Ramghat Road, Vishnupuri, Near water tank, sector 5C, Agra, UP"
      },
      "65793039-6528-4c78-abf2-7a94badbefba": {
        "type": "General Store",
        "name": "U1_GIRRAJ KIRANA",
        "route": "r3",
        "area": "MG Road",
        "address": "Kuldip pandey GIRRAJ KIRANA Ramghat Road, Vishnupuri, Near water tank, sector 5C, Agra, UP"
      },
      "44187a1a-3a60-4a5b-ac75-010fc1b40131": {
        "type": "General Store",
        "name": "U2_GIRRAJ KIRANA",
        "route": "r2",
        "area": "Koramangla",
        "address": "Kuldip pandey GIRRAJ KIRANA Ramghat Road, Vishnupuri, Near water tank, sector 5C, Agra, UP"
      },
      "9c4621e0-3ac3-4e5c-8a5c-b9b6b3f9a70b": {
        "type": "General Store",
        "name": "U1_ABHISHEK GENERAL",
        "route": "r6",
        "area": "MG Road",
        "address": "Shiv kumar Shukla ABHISHEK GENERAL Ramghat Road, Vishnupuri, Near water tank, sector 5C, Agra, UP"
      },
      "c40a135b-6a51-49b2-9188-a626f6feeb52": {
        "type": "General Store",
        "name": "U2_ABHISHEK GENERAL",
        "route": "r3",
        "area": "MG Road",
        "address": "Shiv kumar Shukla ABHISHEK GENERAL Ramghat Road, Vishnupuri, Near water tank, sector 5C, Agra, UP"
      },
      "8318f8b9-5cd9-482f-b933-984e12953c0d": {
        "type": "General Store",
        "name": "U1_MATESHWARI GENRAL",
        "route": "r2",
        "area": "MG Road",
        "address": "Sonu jain MATESHWARI GENRAL Ramghat Road, Vishnupuri, Near water tank, sector 5C, Agra, UP"
      },
      "7e224883-050a-4f9e-9398-6a8462fb5776": {
        "type": "General Store",
        "name": "U2_MATESHWARI GENRAL",
        "route": "r3",
        "area": "MG Road",
        "address": "Sonu jain MATESHWARI GENRAL Ramghat Road, Vishnupuri, Near water tank, sector 5C, Agra, UP"
      },
      "165a8c8d-8981-4e61-9936-aa72b499f510": {
        "type": "General Store",
        "name": "U1_PAVAN GENRAL",
        "route": "r6",
        "area": "MG Road",
        "address": "HARIHAR PAN PAVAN GENRAL Ramghat Road, Vishnupuri, Near water tank, sector 5C, Agra, UP"
      },
      "8edf7944-e739-415d-8fc0-fa9d2025d873": {
        "type": "General Store",
        "name": "U2_PAVAN GENRAL",
        "route": "r3",
        "area": "MG Road",
        "address": "HARIHAR PAN PAVAN GENRAL Ramghat Road, Vishnupuri, Near water tank, sector 5C, Agra, UP"
      },
      "f812fe8e-a8ae-4c87-aebe-de9eb0d7665a": {
        "type": "General Store",
        "name": "U1_AJAY GENRAL",
        "route": "r4",
        "area": "Koramangla",
        "address": "Kaluu Sahu AJAY GENRAL Ramghat Road, Vishnupuri, Near water tank, sector 5C, Agra, UP"
      },
      "169013a9-0528-4903-9aa9-6d3a88df4b32": {
        "type": "General Store",
        "name": "U2_AJAY GENRAL",
        "route": "r4",
        "area": "MG Road",
        "address": "Kaluu Sahu AJAY GENRAL Ramghat Road, Vishnupuri, Near water tank, sector 5C, Agra, UP"
      },
      "195d3b38-ac39-4853-acb3-00ce33104c4f": {
        "type": "General Store",
        "name": "U1_BALAJI GENERAL",
        "route": "r1",
        "area": "HSR",
        "address": "Kamal Singh Raguwanshi BALAJI GENERAL Ramghat Road, Vishnupuri, Near water tank, sector 5C, Agra, UP"
      },
      "91f97c44-7192-4da0-a99a-11a5389a61c9": {
        "type": "General Store",
        "name": "U2_BALAJI GENERAL",
        "route": "r5",
        "area": "Koramangla",
        "address": "Kamal Singh Raguwanshi BALAJI GENERAL Ramghat Road, Vishnupuri, Near water tank, sector 5C, Agra, UP"
      },
      "9dfb2b8c-488f-4e5f-9886-58f74cbe0221": {
        "type": "General Store",
        "name": "U1_SANJAY KIRANA",
        "route": "r4",
        "area": "HSR",
        "address": "Shailendra Vyas SANJAY KIRANA Ramghat Road, Vishnupuri, Near water tank, sector 5C, Agra, UP"
      },
      "6a871a79-662b-43b2-9929-738e6f4b6303": {
        "type": "General Store",
        "name": "U2_SANJAY KIRANA",
        "route": "r2",
        "area": "HSR",
        "address": "Shailendra Vyas SANJAY KIRANA Ramghat Road, Vishnupuri, Near water tank, sector 5C, Agra, UP"
      },
      "eafa409b-7b57-406e-884c-e537c5c34cfe": {
        "type": "General Store",
        "name": "U1_RISHAV GENRAL",
        "route": "r4",
        "area": "MG Road",
        "address": "Rajeev Maheshwari RISHAV GENRAL Ramghat Road, Vishnupuri, Near water tank, sector 5C, Agra, UP"
      },
      "f621d85e-407f-447c-a9b8-973d0d211b08": {
        "type": "General Store",
        "name": "U2_RISHAV GENRAL",
        "route": "r2",
        "area": "HSR",
        "address": "Rajeev Maheshwari RISHAV GENRAL Ramghat Road, Vishnupuri, Near water tank, sector 5C, Agra, UP"
      },
      "b965bc14-d6e2-4c58-bc3e-e23d9d177376": {
        "type": "General Store",
        "name": "U1_RAVINDRA KIRANA",
        "route": "r3",
        "area": "Koramangla",
        "address": "Vijay Singh Rawat RAVINDRA KIRANA Ramghat Road, Vishnupuri, Near water tank, sector 5C, Agra, UP"
      },
      "bfea1c2c-cc3b-4e53-91e5-b25935bbe8af": {
        "type": "General Store",
        "name": "U2_RAVINDRA KIRANA",
        "route": "r2",
        "area": "MG Road",
        "address": "Vijay Singh Rawat RAVINDRA KIRANA Ramghat Road, Vishnupuri, Near water tank, sector 5C, Agra, UP"
      },
      "9ddb5437-8126-4b56-90e8-8fd5e93bce3e": {
        "type": "General Store",
        "name": "U1_AGARWAL GENERAL",
        "route": "r5",
        "area": "MG Road",
        "address": "ANTRIKSH JAIN AGARWAL GENERAL Ramghat Road, Vishnupuri, Near water tank, sector 5C, Agra, UP"
      },
      "d926fd7e-49ff-4021-b6f9-bad61a32eb5c": {
        "type": "General Store",
        "name": "U2_AGARWAL GENERAL",
        "route": "r3",
        "area": "Koramangla",
        "address": "ANTRIKSH JAIN AGARWAL GENERAL Ramghat Road, Vishnupuri, Near water tank, sector 5C, Agra, UP"
      },
      "0af32d04-a435-46d5-8383-51d99d6b2695": {
        "type": "General Store",
        "name": "U1_AMARAPUR KIRANA.",
        "route": "r3",
        "area": "Koramangla",
        "address": "SHYAM LAL RAGHUWANSHI AMARAPUR KIRANA. Ramghat Road, Vishnupuri, Near water tank, sector 5C, Agra, UP"
      },
      "113d7448-320c-4c03-9f23-4294347b462a": {
        "type": "General Store",
        "name": "U2_AMARAPUR KIRANA.",
        "route": "r3",
        "area": "MG Road",
        "address": "SHYAM LAL RAGHUWANSHI AMARAPUR KIRANA. Ramghat Road, Vishnupuri, Near water tank, sector 5C, Agra, UP"
      },
      "7aa08ddc-970a-4ae5-9e0d-955be9dd2493": {
        "type": "General Store",
        "name": "U1_SATISH GENERAL",
        "route": "r4",
        "area": "HSR",
        "address": "NEERAJ GOTAM SATISH GENERAL Ramghat Road, Vishnupuri, Near water tank, sector 5C, Agra, UP"
      },
      "f8d8a043-cf66-4a7d-aa71-d18f26436c89": {
        "type": "General Store",
        "name": "U2_SATISH GENERAL",
        "route": "r1",
        "area": "HSR",
        "address": "NEERAJ GOTAM SATISH GENERAL Ramghat Road, Vishnupuri, Near water tank, sector 5C, Agra, UP"
      },
      "e813a61e-a381-4d88-99b1-82123d7e58af": {
        "type": "General Store",
        "name": "U1_MAMTA KIRANA",
        "route": "r5",
        "area": "HSR",
        "address": "VINOD KUMAR MAMTA KIRANA Ramghat Road, Vishnupuri, Near water tank, sector 5C, Agra, UP"
      },
      "95bf6fa7-692a-4fe8-a1f8-00dc7915567a": {
        "type": "General Store",
        "name": "U2_MAMTA KIRANA",
        "route": "r4",
        "area": "Koramangla",
        "address": "VINOD KUMAR MAMTA KIRANA Ramghat Road, Vishnupuri, Near water tank, sector 5C, Agra, UP"
      },
      "79ded366-37f6-4083-90ef-94ae2361b912": {
        "type": "General Store",
        "name": "U1_BALAJI PROVISION",
        "route": "r4",
        "area": "HSR",
        "address": "SAI BALAJI PROVISION Ramghat Road, Vishnupuri, Near water tank, sector 5C, Agra, UP"
      },
      "10889186-c2fe-40f4-b660-5e04bb2e21c4": {
        "type": "General Store",
        "name": "U2_BALAJI PROVISION",
        "route": "r1",
        "area": "MG Road",
        "address": "SAI BALAJI PROVISION Ramghat Road, Vishnupuri, Near water tank, sector 5C, Agra, UP"
      },
      "9a8d9fc3-6db0-4988-a399-aee101a192fd": {
        "type": "General Store",
        "name": "U1_GURU KRIPA PROVISION",
        "route": "r3",
        "area": "MG Road",
        "address": "B K JAISWAL GURU KRIPA PROVISION Ramghat Road, Vishnupuri, Near water tank, sector 5C, Agra, UP"
      },
      "b586b762-73ae-46de-9c24-5adc4be70f28": {
        "type": "General Store",
        "name": "U2_GURU KRIPA PROVISION",
        "route": "r6",
        "area": "HSR",
        "address": "B K JAISWAL GURU KRIPA PROVISION Ramghat Road, Vishnupuri, Near water tank, sector 5C, Agra, UP"
      },
      "4c2925ea-cc37-4e38-be33-5dcf00ac0165": {
        "type": "General Store",
        "name": "U1_KHUSHI KIRAN",
        "route": "r4",
        "area": "MG Road",
        "address": "VISHNU KHUSHI KIRAN Ramghat Road, Vishnupuri, Near water tank, sector 5C, Agra, UP"
      },
      "44810b1b-3c3f-4318-aba1-47aa174fc6ce": {
        "type": "General Store",
        "name": "U2_KHUSHI KIRAN",
        "route": "r1",
        "area": "Koramangla",
        "address": "VISHNU KHUSHI KIRAN Ramghat Road, Vishnupuri, Near water tank, sector 5C, Agra, UP"
      },
      "9840d41f-b490-4298-9c1d-ccf4aa9c3706": {
        "type": "General Store",
        "name": "U1_JEETU GENERAL",
        "route": "r5",
        "area": "HSR",
        "address": "HEMANT RATHOR JEETU GENERAL Ramghat Road, Vishnupuri, Near water tank, sector 5C, Agra, UP"
      },
      "b772dd68-9be0-4ae6-a2bf-c97ae1b15602": {
        "type": "General Store",
        "name": "U2_JEETU GENERAL",
        "route": "r4",
        "area": "Koramangla",
        "address": "HEMANT RATHOR JEETU GENERAL Ramghat Road, Vishnupuri, Near water tank, sector 5C, Agra, UP"
      },
      "8e91b2cb-3134-481f-94ab-ed4c55012a6f": {
        "type": "General Store",
        "name": "U1_RAJAT KIRANA",
        "route": "r1",
        "area": "MG Road",
        "address": "ANUJ RAJAT KIRANA Ramghat Road, Vishnupuri, Near water tank, sector 5C, Agra, UP"
      },
      "52bd9da6-10b8-47fe-b168-1b2b2f26a4dc": {
        "type": "General Store",
        "name": "U2_RAJAT KIRANA",
        "route": "r5",
        "area": "Koramangla",
        "address": "ANUJ RAJAT KIRANA Ramghat Road, Vishnupuri, Near water tank, sector 5C, Agra, UP"
      },
      "66ffa3ba-e5f8-4a58-bbc4-1759e92dbe25": {
        "type": "General Store",
        "name": "U1_BHUPENDRA GENERAL",
        "route": "r2",
        "area": "Koramangla",
        "address": "Rajesh Raguwanshi BHUPENDRA GENERAL Ramghat Road, Vishnupuri, Near water tank, sector 5C, Agra, UP"
      },
      "21744f7e-1796-46a6-ba26-c9d7ee8390a2": {
        "type": "General Store",
        "name": "U2_BHUPENDRA GENERAL",
        "route": "r6",
        "area": "HSR",
        "address": "Rajesh Raguwanshi BHUPENDRA GENERAL Ramghat Road, Vishnupuri, Near water tank, sector 5C, Agra, UP"
      },
      "58eb9e35-927e-44c4-a55b-be7efd65e96c": {
        "type": "General Store",
        "name": "U1_MURLIHARGUNDAS KIRANA",
        "route": "r1",
        "area": "MG Road",
        "address": "Keshav Rathi MURLIHARGUNDAS KIRANA Ramghat Road, Vishnupuri, Near water tank, sector 5C, Agra, UP"
      },
      "6f0cf235-795b-4dae-9e7b-e9b72edceca8": {
        "type": "General Store",
        "name": "U2_MURLIHARGUNDAS KIRANA",
        "route": "r4",
        "area": "HSR",
        "address": "Keshav Rathi MURLIHARGUNDAS KIRANA Ramghat Road, Vishnupuri, Near water tank, sector 5C, Agra, UP"
      },
      "e7ddafb5-8030-41f8-9b8f-d44a865489f9": {
        "type": "General Store",
        "name": "U1_MENDIPUR PROVISION",
        "route": "r2",
        "area": "HSR",
        "address": "Ankit Medudatta MENDIPUR PROVISION Ramghat Road, Vishnupuri, Near water tank, sector 5C, Agra, UP"
      },
      "455fc129-24ff-498d-9048-ef9cab05f440": {
        "type": "General Store",
        "name": "U2_MENDIPUR PROVISION",
        "route": "r2",
        "area": "MG Road",
        "address": "Ankit Medudatta MENDIPUR PROVISION Ramghat Road, Vishnupuri, Near water tank, sector 5C, Agra, UP"
      },
      "208073e7-8b23-449d-a7f7-f38c1a2901a8": {
        "type": "General Store",
        "name": "U1_Ma Vaishanav Kirana",
        "route": "r2",
        "area": "HSR",
        "address": "RAMAKANT YADAV Ma Vaishanav Kirana Ramghat Road, Vishnupuri, Near water tank, sector 5C, Agra, UP"
      },
      "60e7966b-4dc0-4579-ba2d-b21b4bdcd6be": {
        "type": "General Store",
        "name": "U2_Ma Vaishanav Kirana",
        "route": "r6",
        "area": "MG Road",
        "address": "RAMAKANT YADAV Ma Vaishanav Kirana Ramghat Road, Vishnupuri, Near water tank, sector 5C, Agra, UP"
      },
      "3dc79db6-9fa5-4f5b-b532-82183f7a64d3": {
        "type": "General Store",
        "name": "U1_Gangotri Bazar",
        "route": "r4",
        "area": "MG Road",
        "address": "ASHISH JAIN Gangotri Bazar Ramghat Road, Vishnupuri, Near water tank, sector 5C, Agra, UP"
      },
      "83502de9-c211-465a-bf6b-d8f959a05222": {
        "type": "General Store",
        "name": "U2_Gangotri Bazar",
        "route": "r2",
        "area": "MG Road",
        "address": "ASHISH JAIN Gangotri Bazar Ramghat Road, Vishnupuri, Near water tank, sector 5C, Agra, UP"
      },
      "6a652344-0e63-4d60-a221-814dc103e7e3": {
        "type": "General Store",
        "name": "U1_Shivam Provison",
        "route": "r5",
        "area": "MG Road",
        "address": "KRISHNA Shivam Provison Ramghat Road, Vishnupuri, Near water tank, sector 5C, Agra, UP"
      },
      "5d2503d0-5611-4a62-9647-a451027fbcc5": {
        "type": "General Store",
        "name": "U2_Shivam Provison",
        "route": "r6",
        "area": "MG Road",
        "address": "KRISHNA Shivam Provison Ramghat Road, Vishnupuri, Near water tank, sector 5C, Agra, UP"
      },
      "ecb3ac4f-63d3-4fe2-920b-34c90d5b7b48": {
        "type": "General Store",
        "name": "U1_Very very Lovely PROVISON",
        "route": "r3",
        "area": "Koramangla",
        "address": "SHARAD Very very Lovely PROVISON Ramghat Road, Vishnupuri, Near water tank, sector 5C, Agra, UP"
      },
      "9e35fe6c-8885-48c5-a2ab-741d5c2fb0d9": {
        "type": "General Store",
        "name": "U2_Very very Lovely PROVISON",
        "route": "r2",
        "area": "MG Road",
        "address": "SHARAD Very very Lovely PROVISON Ramghat Road, Vishnupuri, Near water tank, sector 5C, Agra, UP"
      },
      "77e74ed9-15cd-4975-9cc6-1f705e94c692": {
        "type": "General Store",
        "name": "U1_Krishna Kirana",
        "route": "r2",
        "area": "MG Road",
        "address": "MANISH Krishna Kirana Ramghat Road, Vishnupuri, Near water tank, sector 5C, Agra, UP"
      },
      "7ab39054-f9a7-44f1-bde9-e41873a7d3df": {
        "type": "General Store",
        "name": "U2_Krishna Kirana",
        "route": "r2",
        "area": "Koramangla",
        "address": "MANISH Krishna Kirana Ramghat Road, Vishnupuri, Near water tank, sector 5C, Agra, UP"
      }
    },
    "users": {
      "f9ceb8a8-8d11-4ac2-ba8c-8771613ab2a5": {
        "name": "Ram",
        "stores": [
          "ac533b7d-52fa-406f-9491-47c4502f67b9",
          "d596bacc-4c96-485f-a143-d1a493124c39",
          "4492786f-b73c-4a56-9955-8477b6d1f550",
          "7b732a57-3ea5-41ca-8354-301821dad093",
          "578fda8d-70d9-4c79-9514-3208b2bef883",
          "e0ff8552-e0b4-4630-8926-84513eeeae38",
          "50316c1d-c0fb-4257-ae2f-0bec31440eb0",
          "786912e4-9c02-46a8-84bb-74503caaaa5f",
          "fe766f3e-dac5-488c-b30f-909bbe459c04",
          "6f45944c-8f70-45fa-ab13-f471c50c5dcf",
          "581371a1-248c-4079-b734-ace6519b172b",
          "8171e277-241d-4e20-b0ee-e66f0a74191d",
          "6fa13a70-d034-4e45-ba9e-c57208e4e3a1",
          "dc9efefc-7712-44a2-a693-8bdc40808260",
          "d90272b8-da96-4177-8620-26befc7e96b8",
          "94295098-285a-4c2b-98f0-85164f0908d2",
          "4d472c2f-5ee9-4fa8-9d45-2fd8504c5caf",
          "9ebd2ef1-9de0-4de1-af93-11a1c122c256",
          "82e14632-3767-4d3d-a840-62fe67d06e4e",
          "0abf7f73-232e-43c3-a573-4762c83d910d",
          "4973dba9-ea97-49d7-834d-0c2705dd3c01",
          "d02565a6-8a98-4cb5-b95f-ae97e9abc800",
          "d2a654f6-9e13-402c-a4c7-0df3059ac8c3",
          "fcdd28ea-76d5-438b-91b7-51bd0f702f66",
          "f0372412-fb1c-483b-beff-65f402bfcf97",
          "1b77189a-0f19-4290-b7d9-a44743f2373b",
          "5baea352-d8ce-4306-a995-2038f46beb35",
          "d75afc7a-efa0-4cca-8fe2-240dade31a18",
          "198c0ba7-f0cf-409d-825c-52f3f322a865",
          "d0525025-5e43-485e-9b6f-295ce1745f86",
          "aa24abc4-a382-4691-a2f7-7bda1a976814",
          "92415ea8-1f06-48a3-b7e9-156d1a0c7865",
          "b6d0f536-7b4e-4beb-86d3-63186d594c48",
          "25bd7800-bf8a-4d4a-a5b1-b15f16ea5519",
          "771c2fc5-87d7-4eb1-b1ac-9daaab54b864",
          "25056625-f00b-4287-b3dd-ad7c7fd2b7f6",
          "10dfa1ca-58a1-42f0-9be8-93b4a0ff9cbe",
          "da5d7b73-9293-4f7c-9f95-d1da02730263",
          "5d8989e8-f815-46e2-9e68-9e35b7fd78b2",
          "fa3ba33c-93f5-4980-a687-f05666c0ec84",
          "f898b1dd-bc4e-48a6-a36a-89af6947035c",
          "1562d8b3-cdc4-4041-a90c-724c2598ebe9",
          "de585e18-0714-4def-9344-4f6a952023dc",
          "c9c3a192-4fd0-4f29-bea6-ec14425ace5e",
          "a012a2ba-1024-40d6-9a1b-be307edb0c6d",
          "d9351b35-d300-4e1d-9723-a0cc4881bb9c",
          "e06d0784-12a3-4516-90da-3b1f760a21c9",
          "7e2d0ff7-a884-4af4-aa72-90dc50676bb3",
          "7ffc490d-e5a1-46bc-aca7-b1b62acfc2f6",
          "beb3c8c2-fea1-4894-bf7a-4081cb34771b",
          "14a93a20-6bbc-464a-9524-0d629ff13485",
          "ec3ee321-a5c0-4115-be20-627c69286522",
          "d4bc94a5-3b29-4643-b8aa-bd3aa5339c81",
          "9606f2fc-903a-47a8-bb55-a26f464d0fce",
          "dfbccc02-8c43-4b86-801a-c1ebb868a830",
          "6d2913f7-a05a-41cb-a85c-382ce4751338",
          "75fe0d62-74da-4e69-b6f9-9ddf4d31c74a",
          "edec70d3-7f91-4fb8-be65-391907ed1482",
          "868e4178-8319-44ae-91da-f548fdbea0da",
          "beaee8ae-c1b3-4eb7-bf88-2e0eae609f7e",
          "57ad7cb7-e6a1-404c-8ceb-0c2623388023",
          "2bdfba08-a42c-4c6e-8aed-b6fc27fcf809",
          "387cc640-c468-4bcf-baad-5e34e58674c2",
          "34d3396d-2b3e-49e4-a8ad-99d582a0316b",
          "207d38b9-99b1-488b-959c-5ab8a60dc304",
          "14e514e1-a4b8-4473-bf2a-5402bab7eea4",
          "e078d45d-fe79-48dd-9945-5da29d26d6d9",
          "3d7c57f1-1904-4a2d-bc03-3a9a93193a73",
          "b4bc17ab-6d0d-4dd5-affd-55354d6ddfa0",
          "1a1ef710-02e0-4424-b0b4-37bc86f28e7c",
          "1060a42c-f56d-4a8e-890f-b749af41c7ae",
          "09935831-c6c9-4590-9eac-43d85f26d3ae",
          "1d6309e7-3934-46b1-aa37-3afcb746544b",
          "8f321660-8ae2-4148-bd1e-b0713576e686",
          "a427509d-5a7f-4124-ba06-50b407477234",
          "0d13ba0e-56fa-4301-949e-ad9bd39e0e70",
          "147bbb0d-520c-48c4-bf5f-c2a6bab6ecb1",
          "03769e95-dac5-41df-98cb-e3110235ccb6",
          "08350dfd-420c-4b3c-a0a6-b825df59033d",
          "1d358cdc-5021-4f21-897b-3eaafd04ab6e",
          "69a07926-5f0e-44ff-848a-1a8ca7a86d48",
          "229f40b6-3834-4c50-9692-477a3b1e8792",
          "13694889-2708-4177-b2c8-7cbe2c259b09",
          "d1c9064e-555f-44ba-a188-22a02b2d302f",
          "08a83b8d-1c11-4ea9-958b-82f323e4c63a",
          "85135da3-e318-435c-8dfd-94e2562bad2d",
          "d882f7c0-d6f5-4c87-a761-acd6ad608976",
          "39e28e53-a99a-4acd-a597-3016003fd673",
          "a7b87f0c-1fb0-4c4e-a356-614240d923ea",
          "33514c25-6e77-4eab-a118-c42642ee1a5c",
          "791e98c8-8b2b-47a1-ac08-69e1cd50dc40",
          "0b0ad42e-c00d-4126-a2b2-202ecc9c56a8",
          "9798d2a3-53d3-4ae2-8f10-929309213a97",
          "08fa72d6-8bb8-4ac3-ad68-35afcd556eba",
          "c72694e3-c9e2-4cc9-ac33-94ddd209ea59",
          "303d29cf-404f-467d-9ec7-be6afb898f04",
          "b6f6d799-b1b5-496c-9715-b7ebe36118ae",
          "0c1d71ac-c244-4121-8dd7-505abed1fc4b",
          "c908eb96-aaf0-4e36-9351-fd5e8a606968",
          "6c9538f3-77bf-4d67-89f9-ff8a190757b5",
          "d7485cfb-fccb-4fab-bd22-88dd44d8bfd6",
          "7a3a5a68-d3fd-47bf-ac88-29d25a26a88d",
          "9f3265dd-fb9e-4479-b2dd-4c2233114f77",
          "a67dd940-bb0f-43a0-8935-3bfbbcf8e246",
          "6dc27f1b-2b33-4769-9d0d-81f1ec9a040b",
          "808194b7-bf04-4733-a6dc-720c4a7a67b6",
          "f531941e-bd7c-41ca-9cd0-809cc58b3b36",
          "fd79c8e2-9145-496c-9fd6-f46b88488444",
          "172881b0-fefd-4196-8e59-5d1a7856b4c9",
          "bc4ada48-88d8-44d6-bcd5-726bdac212d2",
          "945c93bb-e801-4987-bdd8-6c2a603f7e74",
          "9b209a8c-c240-4517-b7ec-81954e38ec5f",
          "bf815056-d0e0-4745-a7c5-37ed250b6313",
          "ba013c4e-7a99-4255-a285-299e12bb289f",
          "fa6679c6-69f2-4e79-a6fd-9781c15603a0",
          "91979f2d-7001-4445-9906-f2098d36018f",
          "94d04e29-6988-4821-a184-1687927177ef",
          "570a3035-3fe3-4c57-8083-92473b791ed7",
          "2a8b4ddc-706e-4f5e-a210-f47ea98f8388",
          "db66755a-ee6b-421b-9d44-ec2a3c70f92f",
          "d14d562b-3d41-4f07-9528-0f5a26708d8d",
          "f5d0e26d-ae98-46c5-a1a9-3446e508e954",
          "de9adfc9-18e1-4352-9d91-140202372c54",
          "8fdf1ca4-418e-400a-8a2b-d270585e858b",
          "27984f4b-c701-4e30-a9a9-dc82984bf8db",
          "fcef2851-2f10-47f8-a542-3de0f53d04f2",
          "080b6d99-455c-4042-9b99-50890f97e770",
          "6bcab95c-f998-4d4d-b050-81cbaed76639",
          "9dc54072-da87-408a-8670-317b15719de3",
          "4ac65cfe-8f13-48df-a8a9-c8389e480d5d",
          "0d87133c-d7b6-4f2f-b9bd-5d2369d285c6",
          "a61faf09-e2f7-4781-a8d6-db302ce632a9",
          "bec10011-9158-4a4c-9ffc-055a2b1e2976",
          "5aeb3532-e7fa-416e-84c7-f0da2ac5e2b9",
          "da60aa84-4212-4b24-b06d-af93682e3691",
          "23c245a4-8671-4c1d-a106-62e7e1f9d9f4",
          "7529d958-3289-47dd-9f7e-97a32c691dd0",
          "7c447c04-31b5-4d82-bdd6-2eb0267f559e",
          "7248bcc2-1320-43bc-8289-b43d04e244af",
          "c80c6195-732c-428d-abe3-911ae7d12e93",
          "557233a4-5719-4488-a151-95b59caaa0af",
          "cc38ee84-67ac-4794-8b43-9c5547a94b8e",
          "13599bf7-b0d6-4f96-b231-a16820b32cca",
          "52613e84-221d-461c-95b6-851daf509739",
          "6142dd7c-9ad3-4364-afa5-a9e1ee5da391",
          "066e6547-fa22-48c5-b339-129b71be5a45",
          "2e79d25a-d8fe-41ca-923e-c3e2c292ebc5",
          "387f6727-d6be-408a-b7bd-15466b7e17e9",
          "929a3991-67ce-4f10-afb1-2cd45373f4d7",
          "5f7b6b53-8114-468a-9ca7-79d463cf0cbe",
          "8e024f8f-6907-445f-a5fc-b0e711d352ea",
          "fa6358ce-e04d-4083-a447-d9f947f842c0",
          "925442c8-dbd2-4132-ad8d-a78f792deb16",
          "6f27d70f-b2ab-4528-b45b-b704133f8efa",
          "a0b87e38-52ce-43df-a79f-5eeb347ce198",
          "6ee0b67c-12c2-42a7-9a98-f93acae6f59e",
          "08ab3fab-d31b-488c-b330-06647002a49d",
          "2be84d4f-f684-4fa5-957d-84bb8315dbf3",
          "d2f20216-f634-4a2a-b88a-53a2576510d9",
          "67359f68-71a5-4f70-9efa-80fe8ec302ed",
          "c484671e-3c26-4e95-bc0e-5bb1ce0de4a2",
          "bd0df728-1c22-499d-a87e-7eabdc33706e",
          "a0d1cf62-308b-4d75-9d3e-5b4e6813a68a",
          "1a696a45-8997-4ece-885b-2963c1fdecf6",
          "964a6a32-9a1c-40fc-9944-10707cb1fa98",
          "535c28aa-0233-4d33-8bbb-d5682174a9e6",
          "8cc4a45c-be8f-4c7d-b73c-4311ff456a26",
          "c24118e1-f543-4f5c-b17e-922628f61e9b",
          "c23b5d33-d7b2-4cb2-aa53-7e7f16954c43",
          "0d493187-3acb-4a3e-b098-cc94062e879b",
          "c71668db-3381-402b-b96f-8d8fe37a2684",
          "5251da33-2d43-4054-9e9b-50cf5a8f0192",
          "2ab26e4a-2368-4993-b66f-4e0b956fac7c",
          "6daa038f-d644-4537-a7f3-4ac4b0f4b9cb",
          "b1159843-6009-488f-8fe7-5c36926bc348",
          "69ecdbaf-2fcc-4d78-9d01-d334b9857523",
          "41937c0c-7124-49c1-beab-263fd161780f",
          "1b52cff3-ee12-4772-b0c8-66b848d602fc",
          "977a6f55-7b30-4318-a974-d6e5b0a5d926",
          "8ad47e0f-719f-4620-95d5-1a027292a849",
          "004d39b7-e35a-4d08-986f-2664c429e3b2",
          "065e6e5c-534f-4b94-9599-c4af303aeec9",
          "ff8f1463-4a01-47be-bc39-825778411720",
          "439a954d-9e99-4141-b580-1c118d47e7fd",
          "6660ca12-29a4-4664-a54e-cbede659a2a5",
          "2027f353-1c01-4bed-a28c-ee8d0935365f",
          "c368def5-892e-4c92-acb8-b74744190f0f",
          "d6bc9f4c-82d8-4b42-b2dd-7a64982a4053",
          "989b778a-df1c-40a5-ab75-70efa48d8987",
          "01bf27a8-ae9c-4863-ab52-c5c259a21514",
          "689d88e0-9173-4d4c-b00e-62aa8d69bf3a",
          "b72aa2a3-d879-47f7-8a9b-814e62ed1186",
          "65793039-6528-4c78-abf2-7a94badbefba",
          "9c4621e0-3ac3-4e5c-8a5c-b9b6b3f9a70b",
          "8318f8b9-5cd9-482f-b933-984e12953c0d",
          "165a8c8d-8981-4e61-9936-aa72b499f510",
          "f812fe8e-a8ae-4c87-aebe-de9eb0d7665a",
          "195d3b38-ac39-4853-acb3-00ce33104c4f",
          "9dfb2b8c-488f-4e5f-9886-58f74cbe0221",
          "eafa409b-7b57-406e-884c-e537c5c34cfe",
          "b965bc14-d6e2-4c58-bc3e-e23d9d177376",
          "9ddb5437-8126-4b56-90e8-8fd5e93bce3e",
          "0af32d04-a435-46d5-8383-51d99d6b2695",
          "7aa08ddc-970a-4ae5-9e0d-955be9dd2493",
          "e813a61e-a381-4d88-99b1-82123d7e58af",
          "79ded366-37f6-4083-90ef-94ae2361b912",
          "9a8d9fc3-6db0-4988-a399-aee101a192fd",
          "4c2925ea-cc37-4e38-be33-5dcf00ac0165",
          "9840d41f-b490-4298-9c1d-ccf4aa9c3706",
          "8e91b2cb-3134-481f-94ab-ed4c55012a6f",
          "66ffa3ba-e5f8-4a58-bbc4-1759e92dbe25",
          "58eb9e35-927e-44c4-a55b-be7efd65e96c",
          "e7ddafb5-8030-41f8-9b8f-d44a865489f9",
          "208073e7-8b23-449d-a7f7-f38c1a2901a8",
          "3dc79db6-9fa5-4f5b-b532-82183f7a64d3",
          "6a652344-0e63-4d60-a221-814dc103e7e3",
          "ecb3ac4f-63d3-4fe2-920b-34c90d5b7b48",
          "77e74ed9-15cd-4975-9cc6-1f705e94c692"
        ]
      },
      "db4f73b6-5f22-4ca0-bcdb-0ad15749c46e": {
        "name": "Shyam",
        "stores": [
          "aff12345-1f23-42ee-9986-a0086ee35b47",
          "1075f393-c356-426c-8b2c-daabf9639bbd",
          "7a8f63bb-e1c3-4c30-b4cf-28812241647a",
          "ba0d79ac-533c-4355-983e-1e3480c878a9",
          "45945643-e9f1-4173-93db-b94664365967",
          "fcdae23a-f53f-49c0-898a-02e73c10e8bc",
          "fe928f55-2ab1-4369-87f4-d7e29d0daebb",
          "7da834b7-0c84-450b-b8ba-7fc17aee25d8",
          "9ad9bad6-e268-4dbb-979b-c97c111f8922",
          "e503ccc2-5794-4b10-8d41-ca169b249e57",
          "0cc80d9d-14b4-4d0d-9d88-c02fb59106bf",
          "e3d495b4-6ea9-469d-ab51-319e6140a697",
          "d3af5475-3b64-4001-8672-5e4da802f913",
          "135801d8-1ab3-4c51-95b3-85c88a8aa927",
          "60a6684e-5b34-4902-aa66-6db258c73fbd",
          "3be1c199-cb89-435f-aaa5-c67fa2c14710",
          "d83075fe-45f8-4cdf-9081-347319fea759",
          "22ba2d94-1698-429e-820d-7eafc3ed2696",
          "cf91cb12-1dea-4b16-87af-022312dff59d",
          "85c17784-4864-44c3-bf65-e49345c05e1e",
          "08b0bcb5-2855-46b2-810c-500d13383925",
          "5a7ac9ef-779d-409a-bb02-9d8f8f660443",
          "707e2739-2217-4051-91c9-e20583715d88",
          "d57f310d-29fc-41df-82eb-4bf414c2062a",
          "a6e41f5b-0b11-4dde-b625-9d4e87b4cfb6",
          "c7bd1d6a-f362-4baa-a153-0ea3fda621d3",
          "af2762c5-9482-412f-9494-2073d6c212fe",
          "c390aca3-9679-4ae6-acfd-f62ce216734f",
          "e2f98340-cdef-4d19-a259-ec82cbabfca6",
          "4414a6c4-49aa-4843-9412-423aaa60fd3c",
          "bc92905c-6c2f-43e7-bf50-29881b364427",
          "dc036f80-ffa7-45d1-87cf-21dc6120b287",
          "f506efa9-a247-4864-87fc-20961cb0e764",
          "868b1e23-ffc0-48f0-9ff7-dd98e0b6aeec",
          "5573e014-22e3-42ad-84d9-1875dda962c6",
          "6faafa63-babb-4158-ac85-310ab9bececd",
          "c417b584-c160-4d49-a2f7-30e4c4d29544",
          "793fb0d5-2f55-4285-bf80-f0d455f6cc05",
          "08cc4196-4639-441b-abcb-e6a972ae4c5d",
          "f1be9688-0f4b-49d8-8856-0d9807687d28",
          "04b81028-457b-4496-a2d0-c3bc73fc1acc",
          "777fa756-ef5b-4f81-8f51-c7c99ff1cbe5",
          "81bbfc66-8012-44f7-96c4-e5a1d6a0cdc1",
          "58a28337-390f-40df-b6d7-8a8cb8b23657",
          "65d17ee5-7b69-4b76-b619-e6524ef21111",
          "a376d323-4702-4f38-b338-6abe4418f30c",
          "50fc3aa3-dad8-4caa-aaca-4c03bdd57b65",
          "b8b5425b-a8ce-43b4-997f-ebce4de42eb7",
          "192b5ec8-1075-42df-a51b-d1236741199d",
          "b65e889b-13f1-4f6b-96c5-c29680b13c4e",
          "08fc955c-c7a4-4ae4-baf4-c8c8ad8c7aa9",
          "6507362f-603a-43b0-a7ed-6b8e874b4db0",
          "083a2771-a90c-4a61-9807-16df344784ce",
          "6ab1b3a0-6bc4-4318-b8cb-e2a7d450778a",
          "94d47f3e-4608-4b0f-817e-b8dc8ba04f89",
          "2f23680e-a32f-42ed-bb63-fcc39b0da7c3",
          "98ee7613-d955-4dc0-a467-b79f47e4c96f",
          "610d2522-3167-4be0-9ca6-bcc447628979",
          "bd049cb8-b725-4d7e-a1b4-db9976485ebe",
          "bf98bad8-b17d-4cc0-a64d-b59b28139547",
          "ada7d9e6-988b-489c-b199-4778b2cc9c1e",
          "aef50f8b-59ad-41a0-bb3e-f5c56e4233bc",
          "8620a3ae-b1b0-4937-b373-c14cac19a6e1",
          "7bad38c3-6267-4ded-8e58-3a8d625007e8",
          "03e43d38-cac3-405d-b8e5-4db3406d92b4",
          "59643c2d-bdfc-4b76-a30e-460da7c24b13",
          "72cd1cdf-f1e4-4033-b2e8-c6dc489a542c",
          "e6755cba-cfa5-47c5-9c11-18d242636638",
          "5b91d674-871e-4042-ad14-0cc26a1b698f",
          "c57bd7a1-66d5-4deb-8dd5-c16f6da34a5e",
          "3d5effca-2c0d-4416-85fe-0a13687861e4",
          "f09a9f20-5ec4-404f-b0bb-8ee7e98b56cd",
          "add7421d-4922-414e-aa1c-dbf93496509c",
          "ec5159be-b0f3-4bdc-b66c-9cabf3e63fe5",
          "39797677-7df5-451a-a72d-7b84898333b2",
          "e49c74c6-6630-4f9c-8114-f2aa8442907a",
          "9b7ea441-bc23-461b-97e7-48f89421752b",
          "05738797-c2b6-46e0-aa35-9013b9a32d1f",
          "eb6317de-e4a7-4145-82b4-491b475fb8a2",
          "3b926666-8eb8-4b53-82bf-749557966ea2",
          "85b8b07d-d7fa-472a-8de2-4a7d7e6800c7",
          "86bc4295-e7c7-40da-96e6-189bf7a4ac6b",
          "6e5f6429-e45c-4b03-8a1a-6e51a2e3b199",
          "acda013d-f445-4139-8506-f06f7ab32da1",
          "b86e7b4f-a246-411b-9020-378c08d5f90a",
          "cb6b90a2-cf81-4d68-92e1-9ac13d1699f4",
          "ec7251b9-7940-4eae-9957-1576b1d9e985",
          "a3845f1e-6814-4b71-8d67-455d705f8ad0",
          "c9a45b4b-85de-4742-8a89-851041830860",
          "bf23d823-ed34-47bc-ab25-55aca0422f82",
          "95f49405-94e1-4423-bdf6-049b1271e5d1",
          "d6aa696a-8bb8-4377-ac8b-1892f2be6af0",
          "6d77c6b5-1f2b-4306-bcbd-b35676fe7395",
          "61552888-10fb-40a1-b81a-4a3d64684078",
          "f2cb832f-3806-4de6-8ab9-4f5d7cf8d8eb",
          "b8c285d3-8747-407b-be22-5879b2ed768a",
          "bffc4df6-7853-496f-b158-c4c6a5cbb892",
          "9f7cd82a-9af1-4fea-8635-144e6bf4e5c0",
          "fa341718-a647-477e-8b60-9da60083baad",
          "8d7b60c6-b267-4de8-9b94-93c15582927d",
          "e293ab2c-6bd0-49eb-9255-65b89a2e3859",
          "18277163-7c3b-45d6-a2dc-45bdd3e0b0a0",
          "c788f24e-5bd6-4f56-ac22-32a8cca7907f",
          "2d71788d-5862-4a01-ad43-edd66ede8d29",
          "a8f40ef4-2606-462e-8097-48d0c91406ba",
          "ce352662-d2b1-4293-9d3e-36eac2086f90",
          "1170bbf2-b073-4d2a-bd1c-4d5dc7ce9c38",
          "2d00bdc7-6360-4bd1-bbad-460c5fa3036e",
          "312b69c5-f767-4241-8b9f-7a65d5bd4aa1",
          "1751890b-cb18-4133-990d-bb20c1cdcd31",
          "b993d773-5d1f-4eac-8030-edac15ce3951",
          "91a34464-1aed-4186-a891-ca71fddc1014",
          "ac5a111d-430a-443e-9be4-a8059dca05c0",
          "2ee0b782-35eb-4c2f-8b8d-8645cc4cce6e",
          "42e02e16-dd46-4b0c-9a9a-c388ab2fc528",
          "e77b74f8-e627-489c-aad9-a8ff5ddb2240",
          "2fba96e1-95d7-4224-9a17-a64f920b9634",
          "91cef057-f67d-4f72-b8c4-f0cedbe024ac",
          "1cf7266b-a8ac-43f4-a98c-7f7f251c0695",
          "a712f9e3-d9c2-4997-9ba0-cfa5a514187d",
          "13228205-8a91-44b1-8980-480b267bb18b",
          "c7fe727c-2fe4-4a2b-acd6-a02d5f885a8b",
          "19e66429-478f-4701-8fb0-725869522fe8",
          "44430a94-9938-4cde-8631-c8489f2588e8",
          "bb76d3f8-d3c1-4d41-9cec-97d67cb8fa27",
          "50128861-b12a-4881-b1bd-beec42fa0396",
          "8f4839fd-1ff0-4fc6-87ca-8f198d56a737",
          "6420727b-4dd3-471d-9f31-f078e23fef35",
          "d780a279-c378-46dd-a12c-512fab69a5d4",
          "366f0200-b4c6-469b-9a88-ed20f161d3e7",
          "4dc1c8d9-fe64-4951-aaa1-93412e24956e",
          "67b324e6-7ab1-4f1b-9f39-5a58052ed434",
          "f16ef49e-b4ec-4e77-9a9b-5d615c995875",
          "9d2f70e2-bcd6-4c2b-99f7-31cbf41ed3b8",
          "885072af-aa05-464b-ad70-27b74fb434f0",
          "81d61424-41d5-4069-93c4-b27fc8e9a257",
          "c54e9de4-eb30-413f-adec-5d70a618784e",
          "8357f942-6fa0-47ca-8148-39eb1a271e41",
          "cd58b08f-931c-4166-8309-a9b2bf9225b1",
          "c7dcb928-1023-4c51-9fcf-a742acd846c1",
          "6ab6949f-9973-42f8-aff2-f8bfed1ff2d0",
          "7cc63730-06c6-4992-8b50-707c774b6442",
          "4c1ef282-4a5b-46e3-b22f-4a2d7d45f051",
          "d97842ea-5485-4c5e-98f2-4a920576753a",
          "699dca03-18c3-4974-ab30-e32ebe04c8a2",
          "d93930ae-0ffd-43e9-ac70-40a0168b1998",
          "3fd3a6d5-e118-4f12-8e52-2a5fb78b9dc2",
          "8e05974f-0207-4a19-a38e-94f7bd3d138f",
          "94006e91-167b-42f3-a8af-2ed1e0b0fdee",
          "8c48544b-745a-4337-b309-52529330cb6c",
          "801081d7-9be0-44d0-bf7b-b0af0ef0af6e",
          "462560e2-6559-476c-b607-29fbbb3c9d5f",
          "7f5141cf-66f5-4ee4-9933-6a5827bb0515",
          "846087b0-7c60-4fed-921e-36981931294b",
          "24331969-2430-4191-a296-1f34bb4c3a0a",
          "e184a623-8bca-40a6-8baa-045be20f1047",
          "18f21262-e725-44c2-b780-58240e0a6d3e",
          "330af48d-b2ff-4f59-ac75-53a5a744a020",
          "3d3413ff-9dfb-48d4-9f91-869754845e80",
          "c89e31b3-3477-4dbd-94d8-22f4fbdf6edc",
          "55ce02b7-291c-43fb-ad36-758f9609d480",
          "93fb6821-5c4d-4b7c-b796-3320a2c2172d",
          "b0818b3c-78c3-4a25-80f6-dbaf42e69394",
          "d025ae17-9c02-4c3c-815c-7c9a2e2e5ece",
          "020c8953-6509-4e35-b342-f05fe70ada7f",
          "b9b59ef2-ae6b-4d5c-ac53-7532d6eecb73",
          "e87d3147-04a8-4f15-9438-22781ebf46d1",
          "4c131ec6-f534-4a7b-b6f4-d68a6a4e1a00",
          "2f6de435-b530-4621-88e5-fc7aba83671b",
          "3dd562f8-816d-49b3-b242-8799f6c86f65",
          "52955997-bf6c-4bf5-abe7-3feb1de37031",
          "0005b22a-6bb9-415f-ad0f-b4b2098b2f90",
          "fa4dee9d-b2b7-415f-aa25-887c930a73da",
          "8decb2c6-f93c-42eb-8148-66076a6d973d",
          "d6c818c9-1023-4259-8d58-4c97bf9fef0d",
          "d9645e65-fb32-45b4-a2b4-327ad228f7a1",
          "77b434c3-87f9-4f7c-8828-f68e5321a3af",
          "8a907cca-7862-4e0c-b4c4-133e1f7d3994",
          "df455afa-b17a-4d50-b6c5-d925f9e899ab",
          "0f1fc72e-d567-44cb-9897-6cb588db4491",
          "43d4d8a0-e27a-4f71-b980-8cf66816cf29",
          "f6b15fee-f69c-4879-8359-5f28c4f65210",
          "a852ba2f-5eec-4337-a885-5a6b0ef5f359",
          "2eea2cfa-55d7-453a-b92a-2cf6ccf0e500",
          "08194563-4a73-4c1b-ae28-d8cdaaff1613",
          "ecfdf133-6fc0-4218-8100-0c5e5bb5ac30",
          "bda8c698-4aa6-468a-a5c9-08d751e1e68a",
          "f7913501-7fe4-4b3b-8ef6-53da3df8d004",
          "8ef87ea5-d19a-466a-9e19-121caeb27df7",
          "fde542e5-4496-47ea-9cc9-f028e604871a",
          "a5ebed41-5909-4377-ad0a-750bd1dea7f2",
          "9b0abea2-f095-4264-b270-ec66433cde23",
          "44187a1a-3a60-4a5b-ac75-010fc1b40131",
          "c40a135b-6a51-49b2-9188-a626f6feeb52",
          "7e224883-050a-4f9e-9398-6a8462fb5776",
          "8edf7944-e739-415d-8fc0-fa9d2025d873",
          "169013a9-0528-4903-9aa9-6d3a88df4b32",
          "91f97c44-7192-4da0-a99a-11a5389a61c9",
          "6a871a79-662b-43b2-9929-738e6f4b6303",
          "f621d85e-407f-447c-a9b8-973d0d211b08",
          "bfea1c2c-cc3b-4e53-91e5-b25935bbe8af",
          "d926fd7e-49ff-4021-b6f9-bad61a32eb5c",
          "113d7448-320c-4c03-9f23-4294347b462a",
          "f8d8a043-cf66-4a7d-aa71-d18f26436c89",
          "95bf6fa7-692a-4fe8-a1f8-00dc7915567a",
          "10889186-c2fe-40f4-b660-5e04bb2e21c4",
          "b586b762-73ae-46de-9c24-5adc4be70f28",
          "44810b1b-3c3f-4318-aba1-47aa174fc6ce",
          "b772dd68-9be0-4ae6-a2bf-c97ae1b15602",
          "52bd9da6-10b8-47fe-b168-1b2b2f26a4dc",
          "21744f7e-1796-46a6-ba26-c9d7ee8390a2",
          "6f0cf235-795b-4dae-9e7b-e9b72edceca8",
          "455fc129-24ff-498d-9048-ef9cab05f440",
          "60e7966b-4dc0-4579-ba2d-b21b4bdcd6be",
          "83502de9-c211-465a-bf6b-d8f959a05222",
          "5d2503d0-5611-4a62-9647-a451027fbcc5",
          "9e35fe6c-8885-48c5-a2ab-741d5c2fb0d9",
          "7ab39054-f9a7-44f1-bde9-e41873a7d3df"
        ]
      }
    }
  }

  export default mockData;