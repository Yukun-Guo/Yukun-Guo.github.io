---
title: "Final Visualization"
Author: "Yukun Guo"
date: 2022-06-09
output: html_document
---
  
![](../images/finalvisualization.png)

## Report

### Data description

The data are collected by [The Common Core of Data (CCD)](https://nces.ed.gov/ccd/files.asp#Fiscal:2,LevelId:7,SchoolYearId:35,Page:1). The primary purpose of the CCD is to provide basic information on public elementary and secondary schools, local education agencies (LEAs), and state education agencies (SEAs) for each state. The [table](https://nces.ed.gov/ccd/Data/zip/ccd_sch_052_2021_l_1a_080621.zip) used in this project contains 18 variables (include, state, school name, student race, student gender, student count, etc.) and 11,149,338 records of students' information across the U.S. at school level.

### Audience

People who care about the education of public elementary and secondary schools.

### Type of Graph

Bar chart and Pie Chart.

### Description

This graph is published in a Shiny application. This application contains four parts, a control panel, a bar chart and two pie charts. In the control panel, the user can select a state and a school to check the gender and ethnicity ratios of students. The bar chart shows both the gender and race of students. The first pie chart shows the gender proportion, and the second one shows the race proportion.

##### Note: since this app takes too much memory for run, the [Shinyapps.io](https://9pyc6f-yukun.shinyapps.io/Final-Visualization_Yukun-Guo/) (Free version plan) can't run this app.

### Code

```{r}
library(shiny)
library(tidyverse)
library(readr)
library(ggrepel)

# load data
# tidyschools.csv is over 400Mb, too big! :(
#tidyschools <- read.csv("data/tidyschools.csv") 
# tidyschools.csv.gz is only 15Mb, great! :)
tidyschools <- read.csv("data/tidyschools.csv.gz") 

# convert variable type from double to integer to reduce the 
# memory cost, but not sure if it works.
tidyschools$STUDENT_COUNT <-as.integer(tidyschools$STUDENT_COUNT)

# make Bar plot based on selected state and school
makeBarPlot <- function(selectedST, selectedSCH) {
  
  # Construct the title according to the selection, and filter the 
  # data by selected state and school to build a new data frame
  if (selectedST == "ALL") {
    if (selectedSCH == "ALL") {
      df <- tidyschools
      str_title <- "Students across the United States."
    } else {
      df <- tidyschools |>
        filter(SCH_NAME == selectedSCH)
      str_title <- paste0("Students at ", selectedSCH)
    }
  } else {
    if (selectedSCH == "ALL") {
      df <- tidyschools |>
        filter(ST == selectedST)
      str_title <- paste0("Students in ", selectedST)
    } else {
      df <- tidyschools |>
        filter(ST == selectedST, SCH_NAME == selectedSCH)
      str_title <- paste0("Students at ", selectedSCH, ", ", selectedST)
    }
  }
  
  # get student count
  df <- df |>
    group_by(RACE_ETHNICITY, SEX) |>
    summarise(StudentCount = sum(STUDENT_COUNT))
  
  # wrap race string to make it shorter for a better visualization of x label
  df$RACE_ETHNICITY <- str_wrap(df$RACE_ETHNICITY, width = 23)
  
  # make plot
  plt <- ggplot(df, aes(x = RACE_ETHNICITY, y = StudentCount,fill=SEX)) +
    geom_bar(position = "stack", stat = "identity") +
    ylab("Student Count") +
    xlab("Race") +
    ggtitle(str_title)
  show(plt)
}

# make Pie plot based on selected state and school, SEX
makePiePlot_SEX <- function(selectedST, selectedSCH) {
  # Construct the title according to the selection, and filter the 
  # data by selected state and school to build a new data frame
  if (selectedST == "ALL") {
    if (selectedSCH == "ALL") {
      df <- tidyschools
      str_title <- "Gender distribution of students across the United States."
    } else {
      df <- tidyschools |>
        filter(SCH_NAME == selectedSCH)
      str_title <- paste0("Gender distribution of students at ", selectedSCH)
    }
  } else {
    if (selectedSCH == "ALL") {
      df <- tidyschools |>
        filter(ST == selectedST)
      str_title <- paste0("Gender distribution of students in ", selectedST)
    } else {
      df <- tidyschools |>
        filter(ST == selectedST, SCH_NAME == selectedSCH)
      str_title <- paste0("Gender distribution of students at ", selectedSCH, ", ", selectedST)
    }
  }
  
  # modify the data frame
  df <- df |>
    group_by(SEX) |>
    summarise(StudentCount = sum(STUDENT_COUNT)) |>
    mutate(
      csum = rev(cumsum(rev(StudentCount))),
      pos = csum - StudentCount / 2,
      pos = if_else(is.na(pos), StudentCount / 2, pos),
      percentage = round(StudentCount / sum(StudentCount) * 100, digits = 2)
    )

  # make plot, Ref. https://r-charts.com/part-whole/pie-chart-labels-outside-ggplot2/
  plt <- ggplot(df, aes(x = "", y = StudentCount, fill = SEX)) +
    geom_col(width = 1, color = 1) +
    coord_polar(theta = "y") +
    scale_fill_brewer(palette = "Set1") +
    geom_label_repel(
      data = df,
      aes(y = pos, label = paste0(percentage, "%")),
      size = 4.5, nudge_x = 1, show.legend = FALSE
    ) +
    guides(fill = guide_legend(title = "Sex")) +
    theme_void() +
    ggtitle(str_title)

  show(plt)
}

# make pie plot based on selected state and school, RACE_ETHNICITY
makePiePlot_RACE <- function(selectedST, selectedSCH) {
  
  # Construct the title according to the selection, and filter the 
  # data by selected state and school to build a new data frame
  if (selectedST == "ALL") {
    if (selectedSCH == "ALL") {
      df <- tidyschools
      str_title <- "Race distribution of students across the United States."
    } else {
      df <- tidyschools |>
        filter(SCH_NAME == selectedSCH)
      str_title <- paste0("Race distribution of students at ", selectedSCH)
    }
  } else {
    if (selectedSCH == "ALL") {
      df <- tidyschools |>
        filter(ST == selectedST)
      str_title <- paste0("Race distribution of students in ", selectedST)
    } else {
      df <- tidyschools |>
        filter(ST == selectedST, SCH_NAME == selectedSCH)
      str_title <- paste0("Race distribution of students at ", selectedSCH, ", ", selectedST)
    }
  }
  
  # modify the data frame
  df <- df |>
    group_by(RACE_ETHNICITY) |>
    summarise(StudentCount = sum(STUDENT_COUNT)) |>
    mutate(
      csum = rev(cumsum(rev(StudentCount))),
      pos = StudentCount / 2 + lead(csum, 1),
      pos = if_else(is.na(pos), StudentCount / 2, pos),
      percentage = round(StudentCount / sum(StudentCount) * 100, digits = 2)
    )
  
  # wrap race string to make it shorter for a better visualization of x label
  df$RACE_ETHNICITY <- str_wrap(df$RACE_ETHNICITY, width = 23)
  
  # make plot, Ref. https://r-charts.com/part-whole/pie-chart-labels-outside-ggplot2/
  plt <- ggplot(df, aes(x = "", y = StudentCount, fill = RACE_ETHNICITY)) +
    geom_col(width = 1, color = 1) +
    coord_polar(theta = "y") +
    scale_fill_brewer(palette = "Dark2") +
    geom_label_repel(
      data = df,
      aes(y = pos, label = paste0(percentage, "%")),
      size = 4.5, nudge_x = 1, show.legend = FALSE
    ) +
    guides(fill = guide_legend(title = "Race")) +
    theme_void() +
    ggtitle(str_title)

  show(plt)
}


ui <- shinyUI(
  fluidPage(
    # title
    titlePanel("The Common Core of Data - School Membership"),
    
    # control panel
    fluidRow(
      column(4,
        offset = 2,
        selectInput("selectState", label = "Select a State", c("ALL","AL","AK","AZ","AR","CA","CO","CT","DE","DC","FL","GA","HI","ID","IL","IN","IA","KS","KY","LA","ME","MD","MA","MI","MN","MS","MO","MT","NE","NV","NH","NJ","NM","NY","NC","ND","OH","OK","OR","PA","RI","SC","SD","TN","TX","UT","VT","VA","WA","WV","WI","WY","BI","AS","GU","PR","VI"))
      ),
      column(
        6,
        selectInput("selectSchool", label = "Select a School", c('ALL'))
      )
    ),
    
    # bar plot
    plotOutput("barPlot"),
    
    # pie plots
    hr(),
    fluidRow(
      column(
        6,
        plotOutput("PiePlot_SEX")
      ),
      column(
        6,
        plotOutput("piePlot_RACE")
      )
    )
  )
)

server <- shinyServer(function(input, output, session) {
  output$barPlot <- renderPlot(makeBarPlot(input$selectState, input$selectSchool))
  output$PiePlot_SEX <- renderPlot(makePiePlot_SEX(input$selectState, input$selectSchool))
  output$piePlot_RACE <- renderPlot(makePiePlot_RACE(input$selectState, input$selectSchool))

#  StateNamesToUse <- reactive({
#    nms <- tidyschools |>
#      select(ST) |>
#      distinct()
#    nms <- rbind(data.frame(ST = "ALL"), nms)
#  })
#  observeEvent(StateNamesToUse(), {
#    updateSelectInput(session, "selectState",
#      choices = StateNamesToUse()
#    )
#  })
  
  SchoolNamesToUse <- reactive({
    if (input$selectState != "" && input$selectState != "ALL") {
      nms <- tidyschools |>
        filter(ST == input$selectState) |>
        select(SCH_NAME) |>
        distinct()
      nms <- rbind(data.frame(SCH_NAME = "ALL"), nms)
    } else {
      if (input$selectState == "ALL") {
        nms <- tidyschools |>
          select(SCH_NAME) |>
          distinct()
        nms <- rbind(data.frame(SCH_NAME = "ALL"), nms)
      } else {
        nms <- c("ALL")
      }
    }
  })
  observeEvent(SchoolNamesToUse(), {
    updateSelectInput(session, "selectSchool",
      choices = SchoolNamesToUse()
    )
  })
})
shinyApp(ui = ui, server = server)
```
