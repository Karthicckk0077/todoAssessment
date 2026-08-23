| S No | Title | Type | Step Action | Expected Result |
|-------|--------|------|-------------|----------------|
| TC_01 | Verify search with valid product name | Positive | 1. Login.<br>2. Navigate to Products page.<br>3. Enter valid product name.<br>4. Click Search. | Matching products should be displayed. |
| TC_02 | Verify search with partial product name | Positive | 1. Login.<br>2. Navigate to Products page.<br>3. Enter partial product name.<br>4. Click Search. | Matching products should be displayed. |
| TC_03 | Verify search with invalid product name | Negative | 1. Login.<br>2. Navigate to Products page.<br>3. Enter invalid product name.<br>4. Click Search. | "No Products Found" message should be displayed. |
| TC_04 | Verify search with empty field | Edge | 1. Login.<br>2. Navigate to Products page.<br>3. Leave search field blank.<br>4. Click Search. | Validation message or default behavior should be displayed. |