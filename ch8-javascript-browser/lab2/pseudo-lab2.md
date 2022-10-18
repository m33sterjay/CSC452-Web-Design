## Overview

-   complete implementation of a Medical Device Vulnerability Scoring webpage

### Purpose

-   return a score that numerically quantifies how vulnerable a specific vulnerability is to the particular attack
    -   properties of this system are predetermined options
        -   with a styled radio button
-   Once options are selected for all possible properties,
    -   the webpage displays the vulnerability score, && hides the warning label

### Steps

1.  Implement function called `updateScore()`
    -   verifies one button from each property is selected
2.  Using JavaScript, add a `click` or `change` event listener to each radio button
    -   do not add event listener to button label (radio buttons are hidden using CSS)
3.  When one button from each property is selected, the webpage should:
    -   Hide the warning label by setting the display style of the <div> with ID `warning` to `none`
        -   hint: both `none` and `hidden` have similar visual effects, but
            -   `none` doesn't occupy any space, while `hidden` does
                -   which affects the layout
    -   Compute the vulnerability score
    -   Score should update and display insdie the <div> with ID `score`
4.  Score minimum of 0 && max of 10
5.  Final score should be **rounded up** to the tenths decimal place, and displayed with _one_ decimal place
6.  Once the score is displayed, updating a property will automatically update the vulnerability score
7.  The score is computed as follows:

    -   `Score_final = (Scope_status) * ((3.326258289 * Score_base) + (1.1 * Score_exploitability))`, where `Scope_status`, `Score_base`, and
        `Score_exploitability` are calculated as:
        -   if **`Score_base is 0, then Score_final should be 0`**
    - `Scope_{status}(Selection)` == 
  
        |Scope status| Value|
        ---------------------
        |Unchanged   | 1.0  |
        |Changed     | 1.08 |

    - `Score_base` = `Base_confidentiality + Base_integrity + Base_availability`, where:
      - `Base_confidentiality(Level_sensitivity, Level_confidentiality)` ==
        - **Sens corresponds to rows, and Conf corresponds to columns**

        |*Sens* / *Conf*| None | Low | High |
        -------------------------------------
        | None          | 0.00 | 0.22| 0.56 |
        | Low           | 0.00 | 0.65| 0.75 |
        | High          | 0.00 | 0.85| 0.95 |

    - `Base_integrity(Level_healthImpact, Level_integrity)` ==
      - **Health corresponds to rows, Int corresponds to columns**

        |*Health* / *Int*| None | Low | High |
        --------------------------------------
        | None           | 0.00 | 0.22| 0.56 |
        | Low            | 0.55 | 0.60| 0.75 |
        | High           | 0.85 | 0.90| 0.95 |

    - `Base_availability(Level_healthImpact, Level_availability)` ==
      - **Health corresponds to rows, Avail corresponds to columns**

        |*Health* / *Avail* | None | Low | High |
        -----------------------------------------
        | None              | 0.00 | 0.22| 0.56 |
        | Low               | 0.55 | 0.60| 0.65 |
        | High              | 0.85 | 0.90| 0.95 |

    - `Score_exploitability == Attack_vector * Attack_complexity * Privileged_required * User_interaction`, where:

        - `Attack_vector(Selection)` ==

            | *Attack_vector* | Value |
            ---------------------------
            | Network         | 0.85  |
            | Adjacent        | 0.62  |
            | Local           | 0.55  |
            | Physical        | 0.20  |

        - `Attack_complexity(Selection)` ==

            | *Attack_complexity* | Value |
            -------------------------------
            | Low                 | 0.77  |
            | High                | 0.44  |

        - `Privilege_required(selection)` ==

            | *Privilege* | Value |
            -----------------------
            | None        | 0.85  |
            | Low         | 0.62  |
            | High        | 0.27  |

        - `User_interaction(Selection)` ==

            | *User*    | Value |
            ---------------------
            | None      | 0.85  |
            | Required  | 0.62  |
