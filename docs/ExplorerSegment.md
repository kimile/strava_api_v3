# StravaApiV3.ExplorerSegment

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **Number** | The unique identifier of this segment | [optional] 
**name** | **String** | The name of this segment | [optional] 
**climbCategory** | **Number** | The category of the climb [0, 5]. Higher is harder ie. 5 is Hors catégorie, 0 is uncategorized in climb_category. If climb_category = 5, climb_category_desc = HC. If climb_category = 2, climb_category_desc = 3. | [optional] 
**climbCategoryDesc** | **String** | The description for the category of the climb | [optional] 
**avgGrade** | **Number** | The segment's average grade, in percents | [optional] 
**startLatlng** | [**LatLng**](LatLng.md) |  | [optional] 
**endLatlng** | [**LatLng**](LatLng.md) |  | [optional] 
**elevDifference** | **Number** | The segments's evelation difference, in meters | [optional] 
**distance** | **Number** | The segment's distance, in meters | [optional] 
**points** | **String** | The polyline of the segment | [optional] 


<a name="ClimbCategoryDescEnum"></a>
## Enum: ClimbCategoryDescEnum


* `NC` (value: `"NC"`)

* `_4` (value: `"4"`)

* `_3` (value: `"3"`)

* `_2` (value: `"2"`)

* `_1` (value: `"1"`)

* `HC` (value: `"HC"`)




