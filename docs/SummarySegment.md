# StravaApiV3.SummarySegment

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **Number** | The unique identifier of this segment | [optional] 
**name** | **String** | The name of this segment | [optional] 
**activityType** | **String** |  | [optional] 
**distance** | **Number** | The segment's distance, in meters | [optional] 
**averageGrade** | **Number** | The segment's average grade, in percents | [optional] 
**maximumGrade** | **Number** | The segments's maximum grade, in percents | [optional] 
**elevationHigh** | **Number** | The segments's highest elevation, in meters | [optional] 
**elevationLow** | **Number** | The segments's lowest elevation, in meters | [optional] 
**startLatlng** | [**LatLng**](LatLng.md) |  | [optional] 
**endLatlng** | [**LatLng**](LatLng.md) |  | [optional] 
**climbCategory** | **Number** | The category of the climb [0, 5]. Higher is harder ie. 5 is Hors catégorie, 0 is uncategorized in climb_category. | [optional] 
**city** | **String** | The segments's city. | [optional] 
**state** | **String** | The segments's state or geographical region. | [optional] 
**country** | **String** | The segment's country. | [optional] 
**_private** | **Boolean** | Whether this segment is private. | [optional] 
**athletePrEffort** | [**SummarySegmentEffort**](SummarySegmentEffort.md) |  | [optional] 
**athleteSegmentStats** | [**SummaryPRSegmentEffort**](SummaryPRSegmentEffort.md) |  | [optional] 


<a name="ActivityTypeEnum"></a>
## Enum: ActivityTypeEnum


* `ride` (value: `"Ride"`)

* `run` (value: `"Run"`)




