# StravaApiV3.SummaryAthlete

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**resourceState** | **Number** | Resource state, indicates level of detail. Possible values: 1 -> \"meta\", 2 -> \"summary\", 3 -> \"detail\" | [optional] 
**firstname** | **String** | The athlete's first name. | [optional] 
**lastname** | **String** | The athlete's last name. | [optional] 
**profileMedium** | **String** | URL to a 62x62 pixel profile picture. | [optional] 
**profile** | **String** | URL to a 124x124 pixel profile picture. | [optional] 
**city** | **String** | The athlete's city. | [optional] 
**state** | **String** | The athlete's state or geographical region. | [optional] 
**country** | **String** | The athlete's country. | [optional] 
**sex** | **String** | The athlete's sex. | [optional] 
**premium** | **Boolean** | Deprecated.  Use summit field instead. Whether the athlete has any Summit subscription. | [optional] 
**summit** | **Boolean** | Whether the athlete has any Summit subscription. | [optional] 
**createdAt** | **Date** | The time at which the athlete was created. | [optional] 
**updatedAt** | **Date** | The time at which the athlete was last updated. | [optional] 


<a name="SexEnum"></a>
## Enum: SexEnum


* `M` (value: `"M"`)

* `F` (value: `"F"`)




